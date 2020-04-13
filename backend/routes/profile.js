const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
const profileController = require('../controllers/profile.js');

router.get('/profile/:id', profileController.getProfile);
router.post('/profile/add-pet', checkAuth, profileController.postPet);
router.patch('/profile/:id', checkAuth, profileController.patchProfile);

module.exports = router;
