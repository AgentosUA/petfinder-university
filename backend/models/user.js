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
    lowercase: true
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
  ],
  token: {
    type: String
  }
});

module.exports = mongoose.model('User', userSchema);
