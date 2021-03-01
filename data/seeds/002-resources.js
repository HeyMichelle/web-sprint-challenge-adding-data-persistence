exports.seed = async function(knex) {
	await knex("resources").insert([
		{ name: "computer", description: "macBook pro" },
		{ name: "YGoogle", description: "search results of lectures" },
		{ name: "group members", description: "" }
	]);
};