const mongoose = require('mongoose');

const User = require('../models/user.js');
const Pet = require('../models/pet');

const HttpError = require('../util/httpError');

exports.getProfile = async (req, res, next) => {
  const id = req.params.id;
  try {
    const user = await User.findOne({ _id: id });

    if (!user) {
      return res.status(404).json({
        message: 'Профіль не знайдено!',
      });
    }

    res.status(200).json({
      username: user.name,
      pets: user.pets,
    });
  } catch (err) {
    return next(new HttpError('Упс, щось пішло не так!', 500));
  }
};

exports.postPet = async (req, res, next) => {
  const profileId = req.userData.userId;
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
    owner: profileId,
  });

  try {
    let user = await User.findById(profileId);

    if (!user) {
      return next(new HttpError('Вказаний користувач відсутній!', 404));
    }

    const sess = await mongoose.startSession();
    sess.startTransaction();
    await pet.save({ session: sess });
    user.pets.push(pet); // Додає id тварини!
    await user.save({ session: sess });
    await sess.commitTransaction();

    res.json({
      message: 'Улюбленця успішно додано!',
    });
  } catch (err) {
    console.log(err);
    return next(new HttpError('Не вдалося додати улюбленця до профілю!', 500));
  }
};

exports.removePet = (req, res, next) => {};

exports.patchProfile = (req, res, next) => {
  const id = req.params.id;
  const { name, email, password } = req.body;

  res.status(201).json({
    message: 'hello ' + id + ', from controller',
  });
};
