const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../models/user.js');
const jwt = require('jsonwebtoken');

exports.login = (req, res, next) => {
  let id = req.params.id;
  User.findOne({ email: req.body.email })
    .exec()
    .then(user => {
      if (user.lenght < 1) {
        return res.status(401).json({
          message: 'Auth failed'
        });
      }

      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: 'Auth failed'
          });
        }

        if (result) {
          const token = jwt.sign(
            {
              email: user.email,
              userId: user.id
            },
            'secret',
            {
              expiresIn: '1h'
            }
          );

          res.status(200).json({
            token: token
          });
        }

        res.status(401).json({
          message: 'Auth failed'
        });
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.signup = (req, res, next) => {
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) {
      return res.status(500).json({
        error: err
      });
    } else {
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hash
      });

      user
        .save()
        .then(result => {
          res.status(201).json({
            message: 'User succsessfully created!'
          });
        })
        .catch(err => {
          res.status(409).json({
            error: 'User already exists'
          });
        });
    }
  });
};
