const mongoose = require('mongoose');
const User = require('../models/user.js');

exports.login = (req, res, next) => {
  let id = req.params.id;
  User.findOne({ _id: id }).then(user => {
    res.json({
      userName: user.name
    });
  });
};

exports.signup = (req, res, next) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });

  user
    .save()
    .then(result => {
      res.status(201).json({
        message: 'User succsessfully added!'
      });
    })
    .catch(err => {
      res.status(409).json({
        error: 'User already exists'
      });
    });
};
