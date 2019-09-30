const express = require('express');
const mongoose = require('mongoose');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
// db
const url = 'mongodb://localhost:27017/petfinder_db';

mongoose.connect(url, {
  useNewUrlParser: true
});
mongoose.Promise = global.Promise;

// routes

const profileRoutes = require('./api/routes/profile');
const authRoutes = require('./api/routes/auth');
const searchRoutes = require('./api/routes/search');

app.use(morgan('dev'));
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(searchRoutes);
app.use('/profile', profileRoutes);
app.use(authRoutes);

// error handler

app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
