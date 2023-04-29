const express = require("express");
const authRouter = require("./Auth/Auth.route");
const userRouter = require("./User/User.route");

const v1Router = express.Router();

v1Router.use("/auth", authRouter);
v1Router.use("/user", userRouter);

module.exports = v1Router;
