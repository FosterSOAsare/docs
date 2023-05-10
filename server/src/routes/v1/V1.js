const express = require("express");
const authRouter = require("./Auth/Auth.route");
const userRouter = require("./User/User.route");
const docsRouter = require("./Docs/Docs.route");

const v1Router = express.Router();

v1Router.use("/auth", authRouter);
v1Router.use("/user", userRouter);
v1Router.use("/docs", docsRouter);

module.exports = v1Router;
