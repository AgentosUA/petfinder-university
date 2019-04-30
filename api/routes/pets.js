const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer');
const checkAuth = require('../middleware/check-auth');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, new Date().toISOString() + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

const Pet = require('../models/pets');

router.get('/', (req, res, next) => {
    Pet.find()
        .select('name type status _id petImage')
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
                        petImage: model.petImage,
                        request: {
                            type: 'GET',
                            url: 'http:localhost:1337/pets' + model._id,
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

router.post('/', checkAuth, upload.single('petImage'), (req, res, next) => {
    console.log(req.file);
    const pet = new Pet({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        type: req.body.type,
        status: req.body.status,
        petImage: req.file.path
    });
    pet
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: 'Created new Pet',
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
        .select('name type petImage')
        .exec()
        .then(result => {
            console.log(result)
            if(result) {
                res.status(200).json({
                    id: result.id,
                    name: result.name,
                    type: result.type,
                    status: result.status,
                    request: {
                            type: 'GET',
                            url: 'http:localhost:1337/pets' + result._id
                    }
                })
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

router.patch('/:petId', checkAuth, (req, res, next) => {
    const id = req.params.petId;
    const updateOps = {};
    for(const ops of req.body) {
        updateOps[ops.propName] = ops.value
    }
    Pet.update({ _id: id }, { $set: updateOps })
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'Pet information updated',
                request: {
                    type: 'GET',
                    url: 'http://localhost/products/' + id
                }
            });  
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        });
})

router.delete('/:petId', checkAuth, (req, res, next) => {
    const id = req.params.petId
    Pet.remove({_id : id})
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'Pet removed'
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        });
});

module.exports = router;