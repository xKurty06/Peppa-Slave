// module.exports = (bot, Kurt) => {
// 	const { EmbedMessage } = Kurt;
// 	const channel = bot.channels.cache.get("1060546261951987803");
// 	bot.on("ready", async () => {
// 		const channel = bot.channels.cache.get("1060546261951987803");
// 		const dev = bot.application.owner;
// 		const userID = bot.users.cache.get("698595070198415421");
// 		console.log(`${bot.user.tag} is now online.`);

// 		const package = require("../../package.json");
// 		const ver = package.dependencies["aoi.js"];

// 		const embed = EmbedMessage()
// 			.setDescription(`**${bot.user.tag}** ***is now online and ready to work.***`)
// 			.setFooter({ text: `dev by: ${userID.tag}` })
// 			.setColor("fbb3fd");
// 		await channel.send(`<@${userID.id}>`);
// 		await channel.send(embed);
// 		// await channel.send({
// 		// 	embeds: [{
// 		// 		title: `${bot.user.tag} *is now online and ready to work.*`,
// 		// 		footer: `dev by: ${userID.tag}`,
// 		// 		color: "fbb3fd"
// 		// 	}]
// 		// });
// 		const message = await channel.send(
// 			"*Starting* **Peppa's Slave** *bot in* **■□□□□□10%***"
// 		);

// 		setTimeout(() => {
// 			let a = bot.db.ping;
// 			let b = bot.ws.ping;
// 			let number = a + b;
// 			let ping = Math.round(number);
// 			message.edit("*Starting* **Peppa's Slave** *bot in* **■■□□□□20%***");
// 			message.edit("*Starting* **Peppa's Slave** *bot in* **■■■□□□35%***");
// 			message.edit("*Starting* **Peppa's Slave** *bot in* **■■■■□□60%***");
// 			message.edit("*Starting* **Peppa's Slave** *bot in* **■■■■■□85%***");
// 			message.edit("*Starting* **Peppa's Slave** *bot in* **■■■■■■100%***");
// 			message.edit(
// 				`***Peppa's Slave bot successfully restarted!!*** \n**Bot Ping:** *\`${ping}ms\`*`
// 			);
// 		}, 3000);
// 	});
// };

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
			message.edit("*Starting* **Peppa's Slave** *bot in* **■■■■■■100%**");
		}, 7500);
		setTimeout(() => {
			let a = bot.db.ping;
			let b = bot.ws.ping;
			let number = a + b;
			let ping = Math.round(number);
			message.edit("*Starting* **Peppa's Slave** *bot in* **■■■■■■100%**");
			message.edit(
				`***Peppa's Slave bot successfully restarted!!*** \n**Bot Ping:** *\` ${ping}ms \`*             **Dev by:** *\` ${userID.tag} \`*`
			);
		}, 9000);
	});
};