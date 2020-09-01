const db = require("../data/dbConfig.js");

function getProjects() {
	return db("projects");
}

function getProjectsById(id) {
	return db("projects")
		.where({ id })
		.first();
}

function addProject(project) {
	return db("projects")
		.insert(project)
		.then(ids => {
			return getProjectsById(ids[0]);
		});
}

module.exports = {
	getProjects,
	getProjectsById,
	addProject
};