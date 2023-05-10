const express = require("express");
const { controllerGetDocs } = require("./Docs.controller");
const user = require("../../../middlewares/user.middleware");

const DocsRouter = express.Router();
DocsRouter.get("/", user, controllerGetDocs);

module.exports = DocsRouter;
