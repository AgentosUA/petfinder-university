const express = require('express');
const app = express();
const morgan = require('morgan');
// db
const MongoClient = require('mongodb').MongoClient;
const dbUrl = "mongodb://127.0.0.1:27017";
// devParser
const bodyParser = require('body-parser')

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

MongoClient.connect(dbUrl, function(err, db) {
    if (err) throw err;
    console.log("Database created!");
    db.close();
  }, {  useNewUrlParser: true} );
module.exports = app;