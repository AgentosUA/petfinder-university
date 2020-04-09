const express = require('express');
const app = express();
const mongoose = require('mongoose');
const errorController404 = require('./controllers/error');
const bodyParser = require('body-parser');

// MongoDB:

mongoose.connect(
  'mongodb+srv://' + process.env.DB_USER + ':' + process.env.DB_PASSWORD + process.env.DB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  }
);

// Routes:

const profileRoutes = require('./routes/profile.js');
const advertRoutes = require('./routes/advert.js');
const authRoutes = require('./routes/auth.js');

// Configuration:

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

app.use('/', errorController404.error404);

module.exports = app;
