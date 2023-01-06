module.exports = (bot) => {
	bot.on("ready", async () => {
		console.log(`${bot.user.tag} is now online.`);
		const channel = bot.channels.cache.get("916537961040986152");
		const package = require("../../package.json");
		const ver = package.dependencies["aoi.js"];
		channel.send(
			`***${bot.user.tag}*** *is now online and ready to work.* (\`Aoi.js-v${ver}\`)`
		);

		const message = await channel.send(
			"***Starting PanDa Bot ■□□□□□10%***"
		);

		setTimeout(() => {
			let a = bot.db.ping;
			let b = bot.ws.ping;
			let number = a + b;
			let ping = Math.round(number);
			message.edit("***Starting PanDa Bot ■■□□□□20%***");
			message.edit("***Starting PanDa Bot ■■■□□□35%***");
			message.edit("***Starting PanDa Bot ■■■■□□60%***");
			message.edit("***Starting PanDa Bot ■■■■■□85%***");
			message.edit("***Starting PanDa Bot ■■■■■■100%***");
			message.edit(
				`***PanDa Bot successfully restarted!!*** \n*Bot Ping: \`${ping}ms\`*`
			);
		}, 3000);
	});
};
