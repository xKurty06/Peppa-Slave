module.exports = (bot) => {
	bot.on("ready", async () => {
		console.log(`${bot.user.tag} is now online.`);
		const channel = bot.channels.cache.get("1060546261951987803");
		const userID = bot.users.cache.get("698595070198415421");
		const package = require("../../package.json");
		const ver = package.dependencies["aoi.js"];

		await channel.send(`<@${userID.id}>`);
		await channel.send(
			`***${bot.user.tag}*** *is now online and ready to work.*`
		);

		const message = await channel.send(
			"*Starting* **Peppa's Slave** *bot in* **■□□□□□10%**"
		);
		setTimeout(() => {
			let a = bot.db.ping;
			let b = bot.ws.ping;
			let number = a + b;
			let ping = Math.round(number);
			message.edit("*Starting* **Peppa's Slave** *bot in* **■■□□□□20%**");
		}, 1500);
		setTimeout(() => {
			let a = bot.db.ping;
			let b = bot.ws.ping;
			let number = a + b;
			let ping = Math.round(number);
			message.edit("*Starting* **Peppa's Slave** *bot in* **■■■□□□35%**");
		}, 3000);
		setTimeout(() => {
			let a = bot.db.ping;
			let b = bot.ws.ping;
			let number = a + b;
			let ping = Math.round(number);
			message.edit("*Starting* **Peppa's Slave** *bot in* **■■■■□□60%**");
		}, 4500);
		setTimeout(() => {
			let a = bot.db.ping;
			let b = bot.ws.ping;
			let number = a + b;
			let ping = Math.round(number);
			message.edit("*Starting* **Peppa's Slave** *bot in* **■■■■■□85%**");
		}, 6000);
		setTimeout(() => {
			let a = bot.db.ping;
			let b = bot.ws.ping;
			let number = a + b;
			let ping = Math.round(number);
			message.edit(
				"*Starting* **Peppa's Slave** *bot in* **■■■■■■100%**"
			);
		}, 7500);
		setTimeout(() => {
			let a = bot.db.ping;
			let b = bot.ws.ping;
			let number = a + b;
			let ping = Math.round(number);
			message.edit(
				"*Starting* **Peppa's Slave** *bot in* **■■■■■■100%**"
			);
			message.edit(
				`***Peppa's Slave bot successfully restarted!!*** \n**Bot Ping:** *\` ${ping}ms \`*             **Dev by:** *\` ${userID.tag} \`*`
			);
		}, 9000);
	});
};
