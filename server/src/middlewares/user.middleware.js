const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const user = asyncHandler(async (req, res, next) => {
	if (!req?.headers?.authorization || !req.headers.authorization.startsWith("Bearer ")) {
		res.status(404);
		throw new Error("User doesn't have authorization set up");
		return;
	}
	let token = req?.headers.authorization.split(" ")[1];

	// Compare auth
	let valid = await jwt.verify(token, process.env.JWT_SECRET);

	if (!valid._id || !valid.email) {
		res.status(400);
		throw new Error("User not authorized");
	}
	req.user = valid;
	next();
});

module.exports = user;
