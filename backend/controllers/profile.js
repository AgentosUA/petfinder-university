const User = require('../models/user.js');

exports.getProfile = (req, res, next) => {
	let id = req.params.id;
	User.findOne({ _id: id }).then(user => {
		res.json({
			userName: user.name
		});
	});
};

exports.patchProfile = (req, res, next) => {
	const id = req.params.id;
	const name = req.body.name;
	const email = req.body.email;

	res.json({
		message: 'hello ' + id + ', from controller'
	});
};
