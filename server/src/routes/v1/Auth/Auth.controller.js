const asyncHandler = require("express-async-handler");
const { createUser, checkUserExists, insertUser, loginLocalUser } = require("../../../models/Auth.model");

const controllerCreateUser = asyncHandler(async (data) => {
	// Check if user already exists
	let exists = await checkUserExists({ email: data.email });
	if (exists) {
		return { error: "An account already exists with the specified email" };
	}
	// Save user information
	let user = await insertUser(data);
	return user;
});
const controllerCreateLocalUser = asyncHandler(async (req, res) => {
	let { password, email, provider } = req.body;
	if (!provider || !email || !password) {
		res.status(400);
		throw new Error("Please provide valid credentials");
	}

	let response = await controllerCreateUser(req.body);
	if (response.error) {
		res.status(400);
		throw new Error("An account already exists with the specified email");
	}
	res.status(200).json({ _id: response._id, email: response.email, provider: response.provider });
});

const controllerLoginLocalUser = asyncHandler(async (req, res) => {
	let { password, email, provider } = req.body;
	if (!provider || !email || !password) {
		res.status(400);
		throw new Error("Please provide valid credentials");
	}

	let response = await loginLocalUser(req.body);
	if (response.error) {
		res.status(404);
		throw new Error(response.error);
	}
	res.status(200).json(response);
});

module.exports = { controllerCreateLocalUser, controllerLoginLocalUser };
