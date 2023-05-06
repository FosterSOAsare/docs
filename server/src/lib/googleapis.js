require("dotenv").config();
const { google } = require("googleapis");

const googleDriveClient = new google.auth.OAuth2({
	CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
	CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
	REDIRECT_URI: `${process.env.BACKEND_API_URL}/auth/google/callback`,
});

module.exports = { googleDriveClient, google };
