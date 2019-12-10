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
  const name = req.body.name;
  const age = req.body.age;
  const type = req.body.type;
  const gender = req.body.gender;
  const breed = req.body.breed;
  const atHome = req.body.atHome;
  const description = req.body.description;
  const images = req.body.images;

  const pet = new Pet({
    name: name,
    age: age,
    type: type,
    gender: gender,
    breed: breed,
    atHome: atHome,
    description: description,
    images: images,
    owner: profileId
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
