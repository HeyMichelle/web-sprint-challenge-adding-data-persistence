const db = require("../data/dbConfig.js");

function getResources() {
	return db("resources");
}

function getResourceById(id) {
	return db("resources")
		.where({ id })
		.first();
}

function addResource(resource) {
	return db("resources")
		.insert(resource)
		.then(ids => {
			return getResourceById(ids[0]);
		});
}

module.exports = {
	getResources,
	getResourceById,
	addResource
};