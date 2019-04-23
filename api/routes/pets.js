const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Pet = require('../models/pets');

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /pets'
    });
    console.log('Get!');
});

router.post('/', (req, res, next) => {
    const pet = new Pet({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        age: req.body.age,
        adress: req.body.adress
    });
    pet
        .save()
        .then(result => {
            console.log(result + '' + pet.name);
        })
        .catch(err => console.log(err));
    res.status(201).json({
        message: 'Handling POST request to /pets',
        createdPet: pet
    });
});

router.get('/:petId', (req, res, next) => {
    const id = req.params.petId;
    Pet.findById(id)
        .exec()
        .then(doc => {
            console.log(doc)
            res.status(200).json(doc)
        })
        .catch(err => {
            console.log(err)
        });
});

module.exports = router;