const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profile');

router.get('/:id', profileController.getPets);

router.post('/:id/add-pet', profileController.addPet);
router.post('/:id/remove-pet/:id', profileController.removePet);

module.exports = router;
