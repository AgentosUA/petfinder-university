const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, require: true },
  email: {
    type: String,
    require: true,
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  },
  password: { type: String, require: true },
  privilege: {
    type: String,
    require: true
  },
  pets: [
    {
      petId: { type: Schema.Types.ObjectId, ref: 'Product', required: true }
    }
  ]
});

module.exports = mongoose.model('User', userSchema);
