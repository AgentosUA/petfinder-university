const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const advertSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  status: { type: String, required: true },
  gender: { type: String },
  date: { type: String },
  description: { type: String },
  images: { type: String },
  creator: { type: mongoose.Types.ObjectId, required: true, ref: 'User' },
});

module.exports = mongoose.model('Advert', advertSchema);
