const express = require("express");
const session = require("express-session");
const { controllerCreateLocalUser, controllerLoginLocalUser, controllerAuthGoogle, verifyGoogleAuth } = require("./Auth.controller");
const passportInstance = require("../../../lib/passport");
const user = require("../../../middlewares/user.middleware");

const authRouter = express.Router();

authRouter.use(
	session({
		secret: "my-secret-key",
		resave: false,
		saveUninitialized: false,
	})
);
authRouter.get("/local", (req, res) => {
	res.status(200).json({ status: "ok" });
});

authRouter.post("/local", controllerCreateLocalUser);
authRouter.post("/local/login", controllerLoginLocalUser);
authRouter.get("/google", passportInstance.authenticate("google", { scope: ["email", "profile", "https://www.googleapis.com/auth/drive"] }));
authRouter.get("/google/verify", user, verifyGoogleAuth);
authRouter.get("/google/callback", passportInstance.authenticate("google", { failureRedirect: `${process.env.CLIENT_URL}/auth/login` }), controllerAuthGoogle);

module.exports = authRouter;
