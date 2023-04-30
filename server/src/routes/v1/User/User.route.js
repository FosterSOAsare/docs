const express = require("express");
const { controllerUpdateUser, controllerGetUser } = require("./User.controller");
const user = require("../../../middlewares/user.middleware");

const userRouter = express.Router();

userRouter.get("/", user, controllerGetUser);

userRouter.put("/", controllerUpdateUser);
// userRouter.post("/local/login", controllerLoginLocalUser);

module.exports = userRouter;
