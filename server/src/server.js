const https = require("https");
const app = require("./app");
const dotenv = require("dotenv");
const fs = require('fs');
const path = require('path')

const connectDB = require("./lib/mongoose");

const server = https.createServer(
	{
		cert: fs.readFileSync(path.join(__dirname, "cert.pem")),
		key: fs.readFileSync(path.join(__dirname, "key.pem")),
	},
	app
);
const PORT = process.env.PORT || 8000;

(async function () {
	await connectDB();
	server.listen(PORT, () => {
		console.log(`Listening on PORT ${PORT}...`);
	});
})();
