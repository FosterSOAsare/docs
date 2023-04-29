require("dotenv").config();

const mongoose = require("mongoose");

mongoose.connection.once("open", () => {
	console.log("Mongoose connection successfully established");
});
mongoose.connection.on("error", (e) => {
	console.log("Mongoose connection failed" + e.message);
});
async function connectDB() {
	mongoose.connect(process.env.MONGO_URL);
}

module.exports = connectDB;
