const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
const advertController = require('../controllers/advert.js');

// router.get('/advert/:id', advertController.getAdvert);
router.post('/advert/new', checkAuth, advertController.postNewAdvert);
router.get('/adverts', advertController.getAllAdverts);

module.exports = router;
