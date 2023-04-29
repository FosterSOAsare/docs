const express = require("express");
const cors = require("cors");

const v1Router = require("./routes/v1/V1");
const app = express();
const error = require("./middlewares/error.middleware");

app.use(
	cors({
		origin: "*",
	})
);

app.use(express.json());
app.use("/api/v1", v1Router);

app.use((req, res) => {
	res.status(404);
	throw new Error("Page not found");
});
app.use(error);
module.exports = app;
