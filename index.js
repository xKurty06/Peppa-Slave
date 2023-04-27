require("dotenv").config({ path: "./src/.env" });
console.log(`[ SYSTEM ] ~> Client starting...`);
const cfg = require("./src/config.js");
const Kurt = require("aoi.js");
const { Util } = require("aoi.js");
const { setup } = require("aoi.parser");
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

//Setups, Callbacks and Events Handler
require("./handler/events/events.js")(loader, bot, Kurt);
require("./handler/status.js")(bot);
require("./handler/variables.js")(bot);
require("./handler/keepAlive.js")(app, bodyParser, express, server);
// require("./handler/events/onReady.js")(bot, Kurt);
setup(Util);

//Custom Function Manager
require("./handler/customFunction.js")(bot);

//Commands
