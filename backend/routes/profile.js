const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
const profileController = require('../controllers/profile.js');

router.get('/profile/:id', profileController.getProfile);
router.patch('/profile/edit', checkAuth, profileController.patchProfile);

router.post('/profile/add-pet', checkAuth, profileController.postPet);
router.patch('/profile/edit-pet/:id', checkAuth, profileController.patchPet);
router.delete('/profile/remove-pet/:id', checkAuth, profileController.deletePet);

module.exports = router;
