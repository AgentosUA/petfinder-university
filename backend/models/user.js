const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    // validate: [{ validator: value => isEmail(value), msg: 'Invalid email.' }]
  },
  password: {
    type: String,
    required: true,
  },
  pets: [
    {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: 'Pet',
    },
  ],
  adverts: [
    {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: 'Advert',
    },
  ],
});

module.exports = mongoose.model('User', userSchema);
