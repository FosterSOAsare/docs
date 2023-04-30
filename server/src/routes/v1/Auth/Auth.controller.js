const asyncHandler = require("express-async-handler");
const { checkUserExists, insertUser, loginLocalUser, googleAuth, fetchUser } = require("../../../models/User.model");

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
const controllerAuthGoogle = asyncHandler(async (req, res) => {
	if (!req.isAuthenticated()) {
		res.status(401).json({ success: false, message: "Authentication failed" });
		return;
	}
	// Auth user
	let response = await googleAuth(req.user);
	if (response.error) {
		res.status(401);
		throw new Error(response.error);
	}

	res.redirect(`${process.env.CLIENT_URL}/auth/login?action=confirmdetails&token=${response.token}`);
});
const verifyGoogleAuth = asyncHandler(async (req, res) => {
	let user = await fetchUser({ email: req.user.email, _id: req.user._id });
	if (!user) {
		res.status(400);
		throw new Error("User not found");
	}
	//
	res.status(200).json(user);
});
module.exports = { controllerCreateLocalUser, controllerLoginLocalUser, controllerAuthGoogle, verifyGoogleAuth };
