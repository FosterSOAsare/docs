const passportInstance = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const GOOGLE_AUTH_OPTIONS = {
	clientID: process.env.GOOGLE_CLIENT_ID,
	clientSecret: process.env.GOOGLE_CLIENT_SECRET,
	callbackURL: `${process.env.BACKEND_API_URL}/auth/google/callback`,
};

// Define your Passport.js authentication strategies
passportInstance.use(
	new GoogleStrategy(GOOGLE_AUTH_OPTIONS, async (accessToken, refreshToken, profile, done) => {
		let data = {
			email: profile?._json?.email || "",
			image: profile?._json?.picture || "",
			provider: "google",
			refreshToken,
			accessToken,
		};

		done(null, data);
	})
);

passportInstance.serializeUser(function (user, done) {
	done(null, user);
});

passportInstance.deserializeUser(function (user, done) {
	done(null, user);
});

module.exports = passportInstance;
