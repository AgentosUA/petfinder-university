const express = require('express');
const app = express();
const mongoose = require('mongoose');
const errorController404 = require('./controllers/error');
const bodyParser = require('body-parser');

// Routes:

const profileRoutes = require('./routes/profile.js');
const advertRoutes = require('./routes/advert.js');
const authRoutes = require('./routes/auth.js');

// Configuration:

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader(
//     'Access-Control-Allow-Methods',
//     'OPTIONS, GET, POST, PUT, PATCH, DELETE'
//   );
//   res.setHeader(
//     'Access-Control-Allow-Headers',
//     'Content-Type, Authorization, Origin'
//   );
//   next();
// });

app.use(profileRoutes);
app.use(advertRoutes);
app.use(authRoutes);

app.use('/', errorController404.error404);

mongoose.connect('mongodb://localhost:27017/petfinder', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = app;
