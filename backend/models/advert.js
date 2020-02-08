const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const advertSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number },
  type: { type: String, required: true },
  gender: { type: String },
  breed: { type: String },
  status: { type: String, required: true },
  description: { type: String },
  images: { type: [] }
});

module.exports = mongoose.model('Advert', advertSchema);
