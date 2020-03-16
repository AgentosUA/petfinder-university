const Advert = require('../models/advert');
const multer = require('multer');
// const upload = multer({ dest: '/uploads/' });

exports.getAllAdverts = (req, res, next) => {
  let query = {};
  let type = req.query.type;
  let gender = req.query.gender;
  let status = req.query.status;
  // let city = req.query.city;

  if (status !== 'all') {
    query.status = status;
  }
  if (type !== 'all') {
    query.type = type;
  }
  if (gender !== 'all') {
    query.gender = gender;
  }
  // if(status !== 'all') {
  //   query.status = status;
  // }

  Advert.find(query)
    .limit(5)
    .then(adverts => {
      res.status(200).json({
        adverts: adverts
      });
    })
    .catch(err => {
      res.status(404).json({
        error: 'no adverts found'
      });
      console.log(err);
    });
};

exports.postNewAdvert = (req, res, next) => {
  const profileId = req.userData.userId;
  const name = req.body.name;
  const age = req.body.age;
  const type = req.body.type;
  const gender = req.body.gender;
  const breed = req.body.breed;
  const status = req.body.status;
  const description = req.body.description;
  const image = req.file.path;

  const advert = new Advert({
    name: name,
    age: age,
    type: type,
    gender: gender,
    breed: breed,
    status: status,
    description: description,
    image: image,
    owner: profileId
  });
  advert
    .save()
    .then(result => {
      res.status(201).json({
        message: 'Successfully added new advert'
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: 'Failed to add new advert!'
      });
    });
};
