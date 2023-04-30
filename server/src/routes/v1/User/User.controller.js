const asyncHandler = require("express-async-handler");
const { fetchUser } = require("../../../models/User.model");

const controllerGetUser = asyncHandler(async (req, res) => {
	let user = await fetchUser({ email: req.user.email, _id: req.user._id });

	if (!user) {
		res.status(404);
		throw new Error("User doesn't exists");
	}
	res.status(200).json(user);
});
const controllerUpdateUser = asyncHandler(async (req, res) => {
	// To be done
	res.status(200).json({ status: "ok" });
});

module.exports = { controllerUpdateUser, controllerGetUser };
