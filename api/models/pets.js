const mongoose = require('mongoose');

const petSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    type: { type: String, required: true },
    status: { type: String, required: true },
    petImage: { type: String, required: true }
});

module.exports = mongoose.model('Pet', petSchema);