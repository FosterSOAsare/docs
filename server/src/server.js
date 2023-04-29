const http = require("http");
const app = require("./app");
const dotenv = require("dotenv");

const connectDB = require("./lib/mongoose");

const server = http.createServer(app);
const PORT = process.env.PORT || 8000;

(async function () {
	await connectDB();
	server.listen(PORT, () => {
		console.log(`Listening on PORT ${PORT}...`);
	});
})();
