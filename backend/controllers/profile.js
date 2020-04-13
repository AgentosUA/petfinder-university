const mongoose = require('mongoose');

const User = require('../models/user.js');
const Pet = require('../models/pet');

const HttpError = require('../util/httpError');

exports.getProfile = async (req, res, next) => {
  const id = req.params.id;
  try {
    const user = await User.findOne({ _id: id }).populate('pets');

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

exports.deletePet = async (req, res, next) => {
  const { id } = req.params;

  try {
    const pet = await Pet.findById(id).populate('owner');
    if (pet.owner !== req.userId) {
      return next(new HttpError('Ви не можете видяти чужу тваринку', 401));
    }
    if (!pet) {
      return next(new HttpError('Такої тваринки не існує', 404));
    }

    const sess = await mongoose.startSession();
    sess.startTransaction();
    await pet.remove({ session: sess });
    await pet.owner.pets.pull(pet);
    await pet.owner.save({ session: sess });
    await sess.commitTransaction();
    res.status(200).json({
      message: 'Тваринку успішно видалено з профілю',
    });
  } catch (err) {
    console.log(err);
    return next(new HttpError('Помилка на сервері, спробуйте ще раз.', 500));
  }
};

exports.patchProfile = async (req, res, next) => {
  const { userId } = req.userData;
  const { name } = req.body;
  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.json({});
    }

    user.name = name;
    await user.save();
    res.status(200).json({
      message: 'Дані профілю успішно оновлено',
    });
  } catch (err) {
    console.log(err);
    return next(new HttpError('Помилка на сервері, спробуйте ще раз.', 500));
  }
};
