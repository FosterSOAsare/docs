const asyncHandler = require("express-async-handler");
const Docs = require("../../../schemas/Doc.schema");
const { fetchTypes } = require("../../../models/Types.model");

const controllerGetDocs = asyncHandler(async (req, res) => {
	// Fetching docs

	const response = await fetchTypes(req.query, Docs);

	res.status(200).json({ success: true });
});

module.exports = { controllerGetDocs };
