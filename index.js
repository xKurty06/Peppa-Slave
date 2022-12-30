console.log(`[ SYSTEM ] ~> Client starting....`);
require("dotenv").config({ path: "./src/.env" });
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
	res.end("[ SYSTEM ] ~> The server is now active!");
});

//Callbacks and Events Handler
require("./handlers/events.js")(loader, bot, Kurt);
require("./handlers/status.js")(bot);
require("./handlers/variables.js")(bot);
require("./handlers/keepAlive.js")(app, bodyParser, express, server);

//Custom Function Manager
require("./handlers/customFunction.js")(bot);

//Commands
