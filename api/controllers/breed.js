'use strict';

let db = require('../../config/db')();

module.exports = {
	getAll,
	save,
	getOne,
	update,
	delBreed
};

function getAll(req, res, next) {
	res.json({ breeds: db.find() });
}

function save(req, res, next) {
	res.json({ success: db.save(req.body), description: "Breed added to the list." });
}

function getOne(req, res, next) {
	let breedType = req.swagger.params.breedType.value;
	let breed = db.find(breedType);
	if (breed) {
		res.json(breed);
	} else {
		res.status(204).send();
	}
}

function update(req, res, next) {
	let breedType = req.swagger.params.breedType.value;
	let breed = req.body;
	if (db.update(breedType, breed)) {
		res.json({ success: 1, description: "Breed updated"});
	} else {
		res.status(204).send();
	}
}

function delBreed(req, res, next) {
	let breedType = req.swagger.params.breedType.value;
	if (db.remove(breedType)) {
		res.json({success: 1, description: "Breed deleted"})
	} else {
		res.status(204).send();
	}
}