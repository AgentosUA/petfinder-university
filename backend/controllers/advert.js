const mongoose = require('mongoose');
const axios = require('axios');
const FormData = require('form-data');

const { validationResult } = require('express-validator');

const Advert = require('../models/advert');
const User = require('../models/user');
const HttpError = require('../util/httpError');

exports.getAllAdverts = async (req, res, next) => {
  const { status, type, gender } = req.query;
  let { page } = req.query || 1;
  const query = {};
  const limit = 8;
  let skipCount;

  if (status !== 'all' && status !== undefined && status !== '') {
    query.status = status;
  }
  if (type !== 'all' && type !== undefined && type !== '') {
    query.type = type;
  }
  if (gender !== 'all' && gender !== undefined && gender !== '') {
    query.gender = gender;
  }

  if (page > 1 && page !== undefined) {
    skipCount = page * limit - limit;
  } else {
    page = 1;
  }

  console.log(query); // temp check while building react app
  const adverts = await Advert.find(query).skip(skipCount).limit(limit);

  try {
    if (!adverts || adverts.length < 1) {
      return res.status(404).json({
        message: 'Оголошень не знайдено',
        status: 404,
      });
    }
    const count = await Advert.countDocuments(query);
    res.status(200).json({
      adverts,
      count,
      limit,
      page,
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return next(
      new HttpError(
        'Виникла помилка під час пошуку оголошень, спробуйте ще раз.',
        500
      )
    );
  }
};

exports.getAdvert = async (req, res, next) => {
  const id = req.params.id;
  try {
    const advert = await Advert.findById(id).populate('creator', 'id name');
    if (!advert || advert === null) {
      return res.status(404).json({
        message: 'Оголошення не знайдено!',
        status: 404,
      });
    }

    return res.status(200).json({
      advert,
      status: 2000,
    });
  } catch (err) {
    console.log(err);
    return next(
      new HttpError('Сталася помилка на сервері, спробуйте ще раз.', 500)
    );
  }
};

exports.postNewAdvert = async (req, res, next) => {
  const validErrors = validationResult(req);
  if (!validErrors.isEmpty()) {
    return next(
      new HttpError('Невдалося додати оголошення, схоже щось забули ввести'),
      422
    );
  }

  const profileId = req.userData.userId;
  const { name, type, gender, status, description, date } = req.body;

  if (!req.files) {
    return res.status(401).json({
      message: 'Відстутнє зображення!',
    });
  }

  let imageURL;
  try {
    let formData = new FormData();
    formData.append('image', req.files.image.data);
    imageURL = await axios({
      url: 'https://api.imgur.com/3/upload',
      method: 'POST',
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Client-ID ${process.env.imgurID}`,
        ...formData.getHeaders(),
      },
    });
    imageURL = imageURL.data.data.link;
  } catch (error) {
    console.log(error);
    return next(
      new HttpError(
        'Сталася помилка під час роботи сервісу зображень. Спробуйте ще раз!'
      ),
      500
    );
  }

  const advert = new Advert({
    name,
    type,
    gender,
    status,
    description,
    date,
    images: imageURL,
    creator: profileId,
  });
  try {
    const user = await User.findById(profileId);
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await user.adverts.push(advert);
    await advert.save({ session: sess });
    await user.save({ session: sess });
    await sess.commitTransaction();

    res.status(201).json({
      message: 'Оголошення успішно додано!',
    });
  } catch (err) {
    console.log(err);
    return next(
      new HttpError('Сталася помилка на сервері. Спробуйте ще раз.'),
      500
    );
  }
};

exports.patchAdvert = async (req, res, next) => {
  const validErrors = validationResult(req);
  if (!validErrors.isEmpty()) {
    return next(
      new HttpError('Невдалося змінити оголошення, схоже щось ввели не так'),
      422
    );
  }

  const { id } = req.params;
  const profileId = req.userData.userId;
  const { name, type, gender, status, description, image } = req.body;

  try {
    const advert = await Advert.findById(id);
    if (advert.creator != profileId) {
      return next(new HttpError('Ви не можете змінити чуже оголошення!'), 422);
    }
    advert.name = name;
    advert.type = type;
    advert.gender = gender;
    advert.status = status;
    advert.description = description;
    advert.image = image;
    await advert.save();
    res.status(200).json({
      message: 'Оголошення успішно відредаговано!',
    });
  } catch (err) {
    console.log(err);
    return next(
      new HttpError('Сталася помилка на сервері. Спробуйте ще раз.'),
      500
    );
  }
};

exports.deleteAdvert = async (req, res, next) => {
  const { userId } = req.userData;
  const { id } = req.params;
  try {
    const advert = await Advert.findById(id).populate('creator', 'id adverts');
    if (!advert) {
      return next(new HttpError('Такого оголошення не існує', 404));
    }

    if (advert.creator.id !== userId) {
      return next(new HttpError('Ви не можете видаляти чуже оголошення', 401));
    }

    const sess = await mongoose.startSession();
    sess.startTransaction();
    await advert.creator.adverts.pull(advert);
    await advert.remove({ session: sess });
    await advert.creator.save({ session: sess });
    await sess.commitTransaction();
    res.status(200).json({
      message: 'Оголошення успішно видалено!',
    });
  } catch (err) {
    console.log(err);
    return next(new HttpError('Помилка на сервері, спробуйте ще раз.', 500));
  }
};
