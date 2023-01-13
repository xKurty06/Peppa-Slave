require("dotenv").config({ path: "./src/.env" });
console.log(`[ SYSTEM ] ~> Client starting...`);
const cfg = require("./src/config.js");
const Kurt = require("aoi.js");
const botKey = process.env.TOKEN;
const kurty = require("./src/bot.js")(botKey, cfg);
const bot = new Kurt.AoiClient(kurty.Bot);
const loader = new Kurt.LoadCommands(bot);
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const http = require("http");
const server = http.createServer((req, res) => {
	res.writeHead(200);
	let a = bot.db.ping;
	let b = bot.ws.ping;
	let number = a + b;
	let ping = Math.round(number);
	res.end(
		`Peppa's Slave bot is now online and ready to work for "Peppa's Shoppe" server!\n BotPing: ${ping}ms`
	);
});

//Callbacks and Events Handler
require("./handlers/events/events.js")(loader, bot, Kurt);
require("./handlers/status.js")(bot);
require("./handlers/variables.js")(bot);
require("./handlers/keepAlive.js")(app, bodyParser, express, server);
require("./handlers/events/onReady.js")(bot, Kurt);

//Custom Function Manager
require("./handlers/customFunction.js")(bot);

//Commands
