const User = require('../models/user.js');
const Pet = require('../models/pet');

exports.getProfile = (req, res, next) => {
  let id = req.params.id;
  User.findOne({ _id: id })
    .then(user => {
      res.status(200).json({
        username: user.name,
        pets: user.pets
      });
    })
    .catch(err => {
      res.status(404).json({
        error: 'profile not found'
      });
    });
};

exports.postPet = (req, res, next) => {
  const profileId = req.userData.userId;
  console.log(req.userData);
  const { name, age, type, gender, breed, atHome, description, images } = req.body;

  const pet = new Pet({
    name,
    age,
    type,
    gender,
    breed,
    atHome,
    description,
    images,
    owner: 'profileId'
  });
  pet
    .save()
    .then(pet => {
      //   User.findOneAndUpdate(
      //     { _id: req.userData.id },
      //     { $push: { pets: pet.id } }
      //   );
      User.findOne({ _id: profileId })
        .then(user => {
          let pets = user.pets;
          pets.push(pet.id);
          user.pets = pets;
          user.save().then(result => {
            res.status(200).json({
              message: 'Pet succsessfully added'
            });
          });
        })
        .catch(err => console.log(err));
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: 'Failed to add new pet!'
      });
    });
};

exports.patchProfile = (req, res, next) => {
  const id = req.params.id;
  const name = req.body.name;
  const email = req.body.email;

  res.status(201).json({
    message: 'hello ' + id + ', from controller'
  });
};
