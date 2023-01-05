module.exports = (bot, Kurt) => {
	const { EmbedBuilder } = Kurt;
	const userId = "698595070198415421";
	const channel = bot.channels.cache.get("1060546261951987803");
	bot.users.fetch(userId)
		.then(userId, async () => {
			const embed = EmbedBuilder()
				.setTitle(`${bot.user.tag} *is now online and ready to work.*`)
				.setFooter(`dev by: ${userId.user.tag}`)
				.setColor("fbb3fd");
			await channel.send(`<@${userId.id}>`);
			await channel.send(embed);
		})
		.catch(console.error);
	bot.on("ready", async () => {
		console.log(`${bot.user.tag} is now online.`);

		const package = require("../../package.json");
		const ver = package.dependencies["aoi.js"];


		const message = await channel.send(
			"***Starting Peppa's Slave bot in ■□□□□□10%***"
		);

		setTimeout(() => {
			let a = bot.db.ping;
			let b = bot.ws.ping;
			let number = a + b;
			let ping = Math.round(number);
			message.edit("***Starting Peppa's Slave bot in ■■□□□□20%***");
			message.edit("***Starting Peppa's Slave bot in ■■■□□□35%***");
			message.edit("***Starting Peppa's Slave bot in ■■■■□□60%***");
			message.edit("***Starting Peppa's Slave bot in ■■■■■□85%***");
			message.edit("***Starting Peppa's Slave bot in ■■■■■■100%***");
			message.edit(
				`***Peppa's Slave bot successfully restarted!!*** \n**Bot Ping:** *\`${ping}ms\`*`
			);
		}, 3000);
	});
};
