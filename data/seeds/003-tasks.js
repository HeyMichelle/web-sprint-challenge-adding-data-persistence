exports.seed = async function(knex) {
	await knex("tasks").insert([
		{
			description: "set up files",
			notes: "set up initial file structure",
			completed: false,
			projects_id: 1
		},
		{
			description: "design database",
			notes: "look at readme file and design database based on specs",
			completed: false,
			projects_id: 1
		},
		{
			description: "meet with group",
			notes: "meet up with all group members and get basics of app planned out",
			completed: false,
			projects_id: 2
		},
		{
			description: "initial file structure set up",
			notes: "",
			completed: false,
			projects_id: 2
		},
		{
			description: "re-watch all lectures from sprint 2",
			notes: "",
			completed: false,
			projects_id: 3
		}
	]);
};