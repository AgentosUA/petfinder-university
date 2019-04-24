const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Pet = require('../models/pets');

router.get('/', (req, res, next) => {
    Pet.find()
        .select('name type status _id')
        .exec()
        .then(models => {
            const response = {
                count: models.length,
                pets: models.map(model => {
                    return {
                        _id: model.id,
                        name: model.name,
                        type: model.type,
                        status: model.status,
                        request: {
                            type: 'GET',
                            url: 'http:localhost:1337/pets' + model._id
                        }
                    }
                })
            }
            // if(docs.length >= 0) {
                res.status(200).json(response)    
            // } else {
            //     res.status(404).json({
            //         message: 'No entries found'
            //     })
            // }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

router.post('/', (req, res, next) => {
    const pet = new Pet({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        type: req.body.type,
        status: req.body.status
    });
    pet
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: 'Handling POST request to /pets',
                createdPet: pet
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        });
});

router.get('/:petId', (req, res, next) => {
    const id = req.params.petId;
    Pet.findById(id)
        .select('name type ')
        .exec()
        .then(doc => {
            console.log(doc)
            if(doc) {
                res.status(200).json(doc)
            } else {
                res.status(404).json({
                    message: 'no valid entry ID!'
                })
            }
        })
        .catch(err => {
            console.log(err)
        });
});

router.patch('/:petId', (req, res, next) => {
    const id = req.params.petId;
    const updateOps = {};
    for(const ops of req.body) {
        updateOps[ops.propName] = ops.value
    }
    Pet.update({ _id: id }, { $set: updateOps })
        .exec()
        .then(result => {
            console.log(result);
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        });
})

router.delete('/:petId', (req, res, next) => {
    const id = req.params.petId
    Pet.remove({_id : id})
        .exec()
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        });
});

module.exports = router;