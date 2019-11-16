const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	name: { type: String, required: true },
	age: { type: Number },
	type: { type: String },
	gender: { type: String },
	breed: { type: String },
	description: { type: String },
	ownwer: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Pet', userSchema);
