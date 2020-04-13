const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user.js');
const HttpError = require('../util/httpError');

exports.login = (req, res, next) => {
  let id = req.params.id;
  User.findOne({ email: req.body.email })
    .exec()
    .then((user) => {
      if (user.length < 1) {
        return res.status(401).json({
          message: 'Помилка авторизації',
        });
      }

      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: 'Помилка авторизації',
          });
        }

        if (result) {
          const token = jwt.sign(
            {
              email: user.email,
              userId: user.id,
            },
            process.env.secretTokenKey,
            {
              expiresIn: '5h',
            }
          );

          return res.status(200).json({
            token: token,
          });
        }

        res.status(401).json({
          message: 'Помилка авторизації',
        });
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(409).json({
        error: 'Помилка авторизації',
      });
    });
};

exports.signup = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    let checkUser = await User.find({ email });
    if (checkUser.length > 0) {
      return res.status(403).json({
        message: 'Такий користувач вже існує',
      });
    }
    const hash = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hash,
      pets: [],
    });

    await user.save();
    res.status(201).json({
      message: 'Користувач успішно зареєстрований',
    });
  } catch {
    return next(new HttpError('Невідома помилка, спробуйте ще раз', 500));
  }
};
