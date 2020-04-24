const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user.js');
const HttpError = require('../util/httpError');

exports.login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user.length < 1) {
      return res.status(401).json({
        message: 'Помилка авторизації',
      });
    }

    const compare = await bcrypt.compare(req.body.password, user.password);

    if (compare) {
      const token = jwt.sign(
        {
          email: user.email,
          userId: user.id,
        },
        process.env.secretTokenKey,
        {
          expiresIn: '1h',
        }
      );

      return res.status(200).json({
        status: 200,
        token: token,
      });
    }

    res.status(401).json({
      message: 'Помилка авторизації',
    });
  } catch (error) {
    return next(new HttpError('Помилка на сервері, спробуйте ще раз', 500));
  }
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
  } catch (err) {
    console.log(err);
    return next(new HttpError('Невідома помилка, спробуйте ще раз', 500));
  }
};
