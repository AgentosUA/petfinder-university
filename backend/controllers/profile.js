const User = require('../models/user.js');

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

exports.patchProfile = (req, res, next) => {
	const id = req.params.id;
	const name = req.body.name;
	const email = req.body.email;

	res.status(201).json({
		message: 'hello ' + id + ', from controller'
	});
};
