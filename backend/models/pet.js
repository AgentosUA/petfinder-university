const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number },
  type: { type: String, required: true },
  gender: { type: String },
  breed: { type: String },
  description: { type: String },
  images: { type: [String] },
  gps: { type: String },
  owner: { type: mongoose.Types.ObjectId, required: true, ref: 'User' },
});

module.exports = mongoose.model('Pet', userSchema);
