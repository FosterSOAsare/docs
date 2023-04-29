const asyncHandler = require("express-async-handler");
const Auth = require("../schemas/Auth.schema");

const createUser = asyncHandler((data) => {
	console.log(data);
});

const checkUserExists = asyncHandler(async (regex) => {
	return await Auth.findOne(regex);
});

const insertUser = asyncHandler(async (user) => {
	let newUser = new Auth(user);
	return await newUser.save();
});

const loginLocalUser = asyncHandler(async (user) => {
	// Find user exists
	let exists = await checkUserExists({ email: user.email });
	if (!exists) {
		return { error: "User credentials are invalid, please check credentials and try again" };
	}
	// Compare passwords
	exists = new Auth(exists);
	let psMatch = await exists.comparePassword(user.password);
	if (!psMatch) {
		return { error: "User credentials are invalid, please check credentials and try again" };
	}

	// Generate JWT
	await exists.generateJWT();
	return { user: { _id: exists._id, email: exists.email, image: exists.image }, token: exists.token };
});

module.exports = { createUser, checkUserExists, insertUser, loginLocalUser };
