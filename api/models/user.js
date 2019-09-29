const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  name: { type: String, require: true },
  email: {
    type: String,
    require: true,
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  },
  password: { type: String, require: true },
  phone: { type: Number, require: true },
  privilege: {
    type: String,
    require: true
  },
  pets: [
    {
      petId: { type: mongoose.Types.ObjectId, required: true }
    }
  ]
});

module.exports = mongoose.model('User', userSchema);
