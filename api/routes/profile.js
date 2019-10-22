const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profile');

router.get('/profile/:id/pets', profileController.getPets);

router.post('/profile/:id/add-pet', profileController.addPet);
router.post('/profile/:id/remove-pet/:id', profileController.removePet);

module.exports = router;
