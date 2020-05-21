const express = require('express');
const router = express.Router();

const { body } = require('express-validator');
const checkAuth = require('../middleware/check-auth');
const fileUpload = require('../middleware//file-upload');

const advertController = require('../controllers/advert.js');

router.get('/adverts', advertController.getAllAdverts);
router.get('/advert/:id', advertController.getAdvert);
router.post(
  '/advert/new',
  fileUpload.single('image'),
  checkAuth,
  [body('name', 'description').notEmpty()],
  advertController.postNewAdvert
);
router.patch(
  '/advert/:id',
  checkAuth,
  [body('name', 'descrption').notEmpty()],
  advertController.patchAdvert
);
router.delete('/advert/:id', checkAuth, advertController.deleteAdvert);

module.exports = router;
