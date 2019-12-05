const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    // validate: [{ validator: value => isEmail(value), msg: 'Invalid email.' }]
  },
  password: {
    type: String,
    required: true
  },
  pets: [
    {
      petId: { type: Schema.Types.ObjectId, ref: 'Pet' }
    }
  ]
});

module.exports = mongoose.model('User', userSchema);