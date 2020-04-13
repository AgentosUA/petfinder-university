const { validationResult } = require('express-validator');

const Advert = require('../models/advert');
const HttpError = require('../util/httpError');

exports.getAllAdverts = async (req, res, next) => {
  let { type, gender, status } = req.query;

  if (status !== 'all') {
    query.status = status;
  }
  if (type !== 'all') {
    query.type = type;
  }
  if (gender !== 'all') {
    query.gender = gender;
  }

  const adverts = await Advert.find(query).limit(5);

  try {
    if (!adverts) {
      return res.status(404).json({
        message: 'Оголошень не знайдено',
      });
    }

    const count = adverts.length();
    res.status(200).json({
      adverts,
      count,
    });
  } catch {
    return next(new HttpError('Виникла помилка під час пошуку оголошень, спробуйте ще раз.', 500));
  }
};

exports.getAdvert = (req, res, next) => {
  const profileId = req.userData.userId;
  const { name, age, type, gender, breed, status, description, image } = req.body;

  const advert = new Advert({
    name,
    age,
    type,
    gender,
    breed,
    status,
    description,
    image,
    owner: profileId,
  });
  advert
    .save()
    .then((result) => {
      res.status(201).json({
        message: 'Оголошення успішно додано!',
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: 'Не вдалося додати оголошення!',
      });
    });
};

exports.postNewAdvert = async (req, res, next) => {
  const validErrors = validationResult(req);
  if (!validErrors.isEmpty()) {
    return next(new HttpError('Невдалося додати оголошення, схоже щось забули ввести'), 422);
  }

  const profileId = req.userData.userId;
  const { name, age, type, gender, breed, status, description, image } = req.body;

  const advert = new Advert({
    name,
    age,
    type,
    gender,
    breed,
    status,
    description,
    image,
    creator: profileId,
  });

  try {
    await advert.save();
    res.status(201).json({
      message: 'Оголошення успішно додано!',
    });
  } catch (err) {
    console.log(err);
    return next(new HttpError('Сталася помилка на сервері. Спробуйте ще раз.'), 500);
  }
};
