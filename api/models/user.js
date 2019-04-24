const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    age: Number,
    mail: String,
    adress: String
});

module.exports = mongoose.model('User', userSchema);