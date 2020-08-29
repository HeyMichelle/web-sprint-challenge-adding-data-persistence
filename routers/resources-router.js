const express = require("express");

const resourceModel = require("../models/resource-model.js");

const router = express.Router();

router.get("/", (req, res) => {
	resourceModel.getResources()
		.then(resources => {
			res.json(resources);
		})
		.catch(err => {
			err, res.status(500).json({ message: "Failed to get resources." });
		});
});

router.post("/", async (req, res) => {
	try {
		const { name, description } = req.body;
		const payload = {
			name: name,
			description: description
		};
		console.log("name: ", name);
		console.log("description: ", description);

		res.status(201).json(await resourceModel.addResource(payload));
	} catch (error) {
		res.status(500).json({
			error,
			errorMessage:
				"There was an error while saving the resource to the database"
		});
	}
});

module.exports = router;