const http = require("http");
const app = require("./app");
const dotenv = require("dotenv");

const server = http.createServer(app);
const PORT = process.env.PORT || 8000;

(async function () {
	server.listen(PORT, () => {
		console.log(`Listening on PORT ${PORT}...`);
	});
})();

// console.log("dead");
