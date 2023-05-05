const asyncHandler = require("express-async-handler");
const { fetchUser } = require("../../../models/User.model");
const { googleDriveClient, google } = require("../../../lib/googleapis");

const controllerGetUser = asyncHandler(async (req, res) => {
	res.status(200).json({ email: req.user.email, _id: req.user._id, image: req.user.image, refresh: Boolean(req.user.refreshToken) });
});
const controllerGetDocs = asyncHandler(async (req, res) => {
	googleDriveClient.setCredentials({
		access_token: req.user.accessToken,
		refresh_token: req.user.refreshToken,
	});
	const drive = google.drive({ version: "v3", auth: googleDriveClient });

	const response = await drive.files.list({
		fields: "nextPageToken, files(id, name , thumbnailLink)",
	});
	const files = response.data.files;

	res.status(200).json(files);
});
const controllerUpdateUser = asyncHandler(async (req, res) => {
	// To be done
	res.status(200).json({ status: "ok" });
});

module.exports = { controllerUpdateUser, controllerGetUser, controllerGetDocs };
