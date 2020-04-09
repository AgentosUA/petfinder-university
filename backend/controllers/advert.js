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
        adverts
      });
    })
    .catch(err => {
      res.status(404).json({
        error: 'Оголошень не знайдено'
      });
      console.log(err);
    });
};

exports.postNewAdvert = (req, res, next) => {
  const profileId = req.userData.userId;
  const { name, age, type, gender, breed, status, description, image } = req.body;

  const advert = new Advert({
    name,
    age,
    type,
    gender,
    breed,
    status,
    description,
    image,
    owner: profileId
  });
  advert
    .save()
    .then(result => {
      res.status(201).json({
        message: 'Оголошення успішно додано!'
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: 'Не вдалося додати оголошення!'
      });
    });
};
