const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
const profileController = require('../controllers/profile.js');

router.get('/profile/:id', checkAuth, profileController.getProfile);
router.patch('/profile/:id', checkAuth, profileController.patchProfile);

module.exports = router;
