const express = require('express');
const mongoose = require('mongoose');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
// db

// routes

// const petsRoutes = require('./api/routes/pets');
// const orderRoutes = require('./api/routes/orders');

// app.use(morgan('dev'));
// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());

// app.use('/pets', petsRoutes);
// app.use('/orders', orderRoutes);


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

mongoose()

module.exports = app;