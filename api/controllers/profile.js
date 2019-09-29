const User = require('../models/user');
const Pet = require('../models/pet');

exports.getPets = (req, res, next) => {
  let id = req.params.id;
  User.findOne({
    id: req.params.id
  })
    .then(user => {
      res.status(200).json({
        pets: user.pets
      });
    })
    .catch(err => console.log(err));
};

exports.addPet = (req, res, next) => {
  const pet = new Pet({
    name: req.body.name,
    type: req.body.type,
    gender: req.body.gender,
    status: req.body.status,
    images: req.body.images
  });
  pet
    .save()
    .then(result => {
      res.status(201).json({ result });
    })
    .catch(err => console.log(err));
};

exports.removePet = (req, res, next) => {
  Pet.findByIdAndDelete({
    where: {
      id: req.params.id
    }
  })
    .save()
    .then(result => {
      res.status(201).json(result);
    })
    .catch(err => console.log(err));
};

exports.updateProfile = (req, res, next) => {
  let id = req.params.id;
  User.findOne({
    id: req.params.id
  });
  res.status(200).json({
    id: id
  });
};
