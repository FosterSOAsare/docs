const asyncHandler = require("express-async-handler");
const fetchTypes = asyncHandler(async (query, type) => {
	const { page, sort, owner } = query;

	// if (sort) {
	// 	return await type.find({}).sort({ [sort]: "desc" });
	// }
	// if (owner) {
	// 	return await type.find({ owner: owner });
	// }
	// if (page) {
	// 	let pageLimit = 10;
	// 	return await type.find({}).skip(page - 1 * 10);
	// }
	// return await type.find({});
});

module.exports = { fetchTypes };
