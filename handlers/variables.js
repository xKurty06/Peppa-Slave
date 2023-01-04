module.exports = (bot) => {
	bot.variables(
		{
			prefix: "p!",
			clr: "fbb3fd",
			clr2: "FF1010",
			vouchChannel: "",
			vouchStatus: "disabled",
			serverLogs: "",
			ticketHelper: "",
			ticketStatus: "disabled"
		},
		"server"
	);
	bot.variables(
		{
			owners:
				"698595070198415421/845285505678704650/886620575735373825",
			botOwners: "698595070198415421/845285505678704650"
		},
		"bot"
	);
	bot.variables({}, "user");
	bot.variables(
		{
			ticketHelper_format: "false",
		},
		"channel"
	);
	bot.variables(
		// MESSAGE DATABASE
		{
			authorMessage: "",
			msg_messageID: "",
			deleteEmbed: "false"
		},
		"message"
	);
};
