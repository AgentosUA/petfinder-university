const Advert = require('../models/advert');

exports.getAllAdverts = (req, res, next) => {
  const gender = req.query.gender;
  console.log(gender);
  Advert.find({ gender: gender })
    // .limit(15)
    .then(adverts => {
      res.status(200).json({
        adverts: adverts
      });
      console.log(adverts);
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
  const images = req.body.images;

  const advert = new Advert({
    name: name,
    age: age,
    type: type,
    gender: gender,
    breed: breed,
    status: status,
    description: description,
    images: images,
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
