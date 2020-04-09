const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/user.js');
const jwt = require('jsonwebtoken');

exports.login = (req, res, next) => {
  let id = req.params.id;
  User.findOne({ email: req.body.email })
    .exec()
    .then(user => {
      if (user.length < 1) {
        return res.status(401).json({
          message: 'Помилка авторизації'
        });
      }

      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: 'Помилка авторизації'
          });
        }

        if (result) {
          const token = jwt.sign(
            {
              email: user.email,
              userId: user.id
            },
            process.env.secretTokenKey,
            {
              expiresIn: '5h'
            }
          );

          return res.status(200).json({
            token: token
          });
        }

        res.status(401).json({
          message: 'Помилка авторизації'
        });
      });
    })
    .catch(err => {
      console.log(err);
      res.status(409).json({
        error: 'Помилка авторизації'
      });
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
            message: 'Користувач успішно зареєстрований!'
          });
        })
        .catch(err => {
          res.status(409).json({
            error: 'Користувач з такою поштою вже існує'
          });
        });
    }
  });
};
