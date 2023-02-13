const path = require("path");

module.exports = (app, bodyParser, express, server) => {
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(express.static("public"));
	app.get("/", function (req, res) {
		res.sendFile("/home/runner/Peppa-Slave/src/host/index.html");
	});

	let listeningCount = 0;

	app.listen(3000, (err) => {
		if (err) {
			console.error(
				"[ERROR] ~> An error occurred while starting the client server:",
				err
			);
			process.exit(1);
			return;
		}
		console.log("[SYSTEM] ~> Client server is listening on port 3000...");

		listeningCount += 1;

		if (listeningCount === 2) {
			console.log("[SYSTEM] ~> Both client and server are listening...");
		}
	});
	server.listen(3010, (err) => {
		if (err) {
			console.error(
				"[ERROR] ~> An error occurred while starting the server:",
				err
			);
			process.exit(1);
			return;
		}
		console.log("[SYSTEM] ~> Server is listening on port 3010...");

		listeningCount += 1;

		if (listeningCount === 2) {
			console.log("[SYSTEM] ~> Both client and server are listening...");
		}
	});
};
