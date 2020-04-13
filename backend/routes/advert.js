const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const checkAuth = require('../middleware/check-auth');
const advertController = require('../controllers/advert.js');

router.get('/adverts', advertController.getAllAdverts);
router.get('/advert/:id', advertController.getAdvert);
router.post(
  '/advert/new',
  checkAuth,
  [body('name', 'descrption').notEmpty()],
  advertController.postNewAdvert
);
router.delete('/advert/:id', checkAuth, advertController.deleteAdvert);

module.exports = router;
