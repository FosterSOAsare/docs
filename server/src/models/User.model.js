const asyncHandler = require("express-async-handler");
const User = require("../schemas/User.schema");

const checkUserExists = asyncHandler(async (regex) => {
	return await User.findOne(regex);
});

const fetchUser = asyncHandler(async (regex) => {
	return await User.findOne(regex, { password: 0, provider: 0, __v: 0 });
});

const insertUser = asyncHandler(async (user) => {
	let newUser = new User(user);
	return await newUser.save();
});

const loginLocalUser = asyncHandler(async (user) => {
	// Find user exists
	let exists = await checkUserExists({ email: user.email });
	if (!exists) {
		return { error: "User credentials are invalid, please check credentials and try again" };
	}
	// Compare passwords
	exists = new User(exists);
	let psMatch = await exists.comparePassword(user.password);
	if (!psMatch) {
		return { error: "User credentials are invalid, please check credentials and try again" };
	}

	// Generate JWT
	await exists.generateJWT();
	return { user: { _id: exists._id, email: exists.email, image: exists.image }, token: exists.token };
});

module.exports = { checkUserExists, insertUser, loginLocalUser, fetchUser };
