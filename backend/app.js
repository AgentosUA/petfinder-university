const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const morgan = require('morgan');

// Routes:

const profileRoutes = require('./routes/profile.js');
const advertRoutes = require('./routes/advert.js');
const authRoutes = require('./routes/auth.js');

// Configuration:
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Origin');
  next();
});

app.use('/uploads', express.static('uploads'));
app.use(profileRoutes);
app.use(advertRoutes);
app.use(authRoutes);

// Error handler:

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || 'Невідома помилка на сервері! Спробуйте ще раз!' });
});

module.exports = app;
