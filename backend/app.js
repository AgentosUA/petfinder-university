const express = require('express');
const app = express();
const mongoose = require('mongoose');

const bodyParser = require('body-parser');

// Routes:

const profileRoutes = require('./routes/profile.js');
const authRoutes = require('./routes/auth.js');

// Configuration:

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(profileRoutes);
app.use(authRoutes);

mongoose.connect('mongodb://localhost:27017/petfinder', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

module.exports = app;
