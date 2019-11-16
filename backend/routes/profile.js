const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profile.js');

router.get('/profile/:id', profileController.getProfile);
router.patch('/profile/:id', profileController.patchProfile);

module.exports = router;
