const mongoose = require('mongoose');

const petSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  type: { type: String, required: true },
  gender: { type: String, required: true },
  status: { type: String, required: true },
  images: [{ type: String, required: true }]
});

module.exports = mongoose.model('Pet', petSchema);
