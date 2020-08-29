const express = require("express");

const projectModel = require("./projects-model.js");

const router = express.Router();

router.get("/", (req, res) => {
	projectModel.getProjects()
		.then(projects => {
			res.json(projects);
		})
		.catch(err => {
			err, res.status(500).json({ message: "Failed to get projects." });
		});
});

router.get("/:id", (req, res) => {
	const { id } = req.params;
	projectModel.getProjectsById(id)
		.then(projects => {
			res.json(projects);
		})
		.catch(err => {
			err, res.status(500).json({ message: "Failed to get project." });
		});
});

router.post("/", async (req, res) => {
	try {
		const { name, description, completed } = req.body;
		const payload = {
			name: name,
			description: description,
			completed: completed
		};
		console.log("payload: ", payload);

		res.status(201).json(await projectModel.addProject(payload));
	} catch (error) {
		res.status(500).json({
			error,
			errorMessage:
				"There was an error while saving the project to the database"
		});
	}
});

// GET list of tasks (include project name, description, list of tasks)
// /:id/tasks
router.get("/:id/tasks", (req, res) => {
	const { id } = req.params;
	console.log(id);

	projectModel.getTasksByProjectID(id)
		.then(tasks => {
			if (tasks) {
				res.json(tasks);
			} else {
				res.json(404).json({ message: "Failed to get tasks." });
			}
		})
		.catch(err => {
			err, res.status(500).json({ message: "Failed to get tasks." });
		});
});

module.exports = router;