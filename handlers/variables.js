module.exports = (bot) => {
	let admin = 2;
	let general = 3;
	let owner = 6;
	let setup = 20;
	let number2 = admin + general + owner + setup;
	let number = admin + general - owner + setup;
	bot.variables(
		{
			prefix: "p!",
			clr: "fbb3fd",
			clr2: "FF1010",
			vouchChannel: "",
			vouchStatus: "disabled",
			ticketHelper: "",
			ticketStatus: "disabled"
		},
		"server"
	);
	bot.variables(
		{
			owners: "698595070198415421/845285505678704650/886620575735373825/800946590939742239",
			botOwners: "698595070198415421", //845285505678704650
			commandsCount: `${number}`,
			commandsCount2: `${number2}`
		},
		"bot"
	);
	bot.variables({}, "user");
	bot.variables(
		{
			lastPremRepFormMsgID: "",
			itemSub: "",
			emailPass: "",
			typeItem: "",
			repEmail: "",
			datePurchase: ""
		},
		"chnnls"
	);
	bot.variables(
		// MESSAGE DATABASE
		{
			authorMessage: "",
			msg_messageID: "",
			deleteEmbed: "false",
			
		},
		"message"
	);
};
