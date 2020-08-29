
const express = require("express");

const taskModel = require("../models/task-model.js");


const router = express.Router();

router.get("/:id", (req, res) => {
	const { id } = req.params;
	console.log("id: ", id);

	taskModel.getTasksById(id)
		.then(tasks => {
			if (tasks) {
				res.json(tasks);
			} else {
				res.json(404).json({ message: "Failed to get task." });
			}
		})
		.catch(err => {
			err, res.status(500).json({ message: "Failed to get task." });
		});
});

router.post("/", async (req, res) => {
	try {
		const { description, notes, completed, projects_id } = req.body;

		const payload = {
			description: description,
			notes: notes,
			completed: completed,
			projects_id: projects_id
		};

		console.log("payload: ", payload);

		res.status(201).json(await taskModel.addTasks(payload));
	} catch (error) {
		res.status(500).json({
			error,
			errorMessage: "There was an error while saving the task to the database"
		});
	}
});

module.exports = router;