const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
const advertController = require('../controllers/advert.js');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});

// router.get('/advert/:id', advertController.getAdvert);
router.post(
  '/advert/new',
  checkAuth,
  upload.single('image'),
  advertController.postNewAdvert
);
router.get('/adverts', advertController.getAllAdverts);

module.exports = router;
