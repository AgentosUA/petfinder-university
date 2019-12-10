const User = require('../models/user.js');
const Pet = require('../models/pet');

exports.getProfile = (req, res, next) => {
	let id = req.params.id;
	User.findOne({ _id: id })
		.then(user => {
			res.status(200).json({
				username: user.name,
				pets: user.pets
			});
		})
		.catch(err => {
			res.status(404).json({
				error: 'profile not found'
			});
		});
};

exports.postPet = (req, res, next) => {
	const id = req.params.id;
	const name = req.body.name;
	const age = req.body.age;
	const type = req.body.type;
	const gender = req.body.gender;
	const breed = req.body.breed;
	const status = req.body.status;
	const description = req.body.description;
	const images = req.body.images;
	const pet = new Pet({
		name: name,
		age: age,
		type: type,
		gender: gender,
		breed: breed,
		status: status,
		description: description,
		images: images,
		owner: id
	});
	pet.save().then(result => {
		res.status(201).json({
			message: 'Successfully added new pet!'
		})
	}).catch(err => {
		console.log(err);
		res.status(500).json({
			error: 'Failed to add new pet!'
		})
	});
}

exports.patchProfile = (req, res, next) => {
	const id = req.params.id;
	const name = req.body.name;
	const email = req.body.email;

	res.status(201).json({
		message: 'hello ' + id + ', from controller'
	});
};
