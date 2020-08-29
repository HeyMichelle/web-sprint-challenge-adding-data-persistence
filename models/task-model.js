const db = require("../data/config.js");

function getTasksByProjectID(projects_id) {
	return db("tasks as t")
		.join("projects as p", "p.id", "t.projects_id")
		.where("t.projects_id", projects_id)
		.select(
			"p.name as project_name",
			"p.description as project_description",
			"t.description as task_description",
			"t.notes as task_notes",
			"t.completed as task_completed"
		);
}

function getTasksById(id) {
	return db("tasks")
		.where({ id })
		.first();
}

async function addTasks(task) {
	return await db("tasks")
		.insert(task)
		.then(task => {
			console.log("task: ", task);
			return getTasksById(task[0]);
		});
}

module.exports = {
	
	getTasksByProjectID,
	getTasksById,
    addTasks
};