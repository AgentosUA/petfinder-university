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

// routes

const homeRoutes = require('./api/routes/home');
const petsRoutes = require('./api/routes/pets');
const profileRoutes = require('./api/routes/profile');
const aboutRoutes = require('./api/routes/about');


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/', homeRoutes);
app.use('/pets', petsRoutes);
app.use('/about', aboutRoutes);
app.use('/profile', profileRoutes);


// error handler

app.use((req, res, next) => {
    const error = new Error('not found');
    error.status = 404;
    next(error);
});

app.use((req, res, next) => {
    res.status(error.status || 500);
    res.json({
        erros: {
            message:  error.message
        }
    });
});

module.exports = app;