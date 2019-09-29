const express = require('express');
const router = express.Router();

const userController = require('../controllers/auth');

router.post('/signup', userController.signUp);

router.post('/login', userController.login);

router.delete(':/userId', userController.removeUser);

module.exports = router;
