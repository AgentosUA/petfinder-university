const Pet = require('../models/pet');

exports.getResult = (req, res, next) => {
  Pet.find({
    name: { $regex: new RegExp(req.query.name, 'i') }
  })
    .limit(20)
    .skip(req.query.offset || 0)
    .then(pets => {
      res.status(200).json(pets);
    })
    .catch(err => {
      console.log(err);
      res.status(500);
    });
};

exports.getPetById;
