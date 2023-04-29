const express = require("express");
const { controllerCreateLocalUser, controllerLoginLocalUser } = require("./Auth.controller");

const authRouter = express.Router();

authRouter.get("/local", (req, res) => {
	res.status(200).json({ status: "ok" });
});

authRouter.post("/local", controllerCreateLocalUser);
authRouter.post("/local/login", controllerLoginLocalUser);

module.exports = authRouter;
