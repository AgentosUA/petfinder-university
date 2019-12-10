const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	name: { type: String, required: true },
	age: { type: Number },
	type: { type: String, required: true },
	gender: { type: String },
	breed: { type: String },
	status: { type: String, required: true },
	description: { type: String },
	images: { type: [] },
	owner: { type: String }
});

module.exports = mongoose.model('Pet', userSchema);