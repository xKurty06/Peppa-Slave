module.exports = {
	ErrorMessages: [
		"",
		"{newEmbed:{description:❌ | Errors Have Occured!\nIf this error keeps repeating, you should report it immediately in our Support Server. Click the button below.}{color:FF1010}}{delete:10s}{deletecommand}",
		"{actionRow:{button:Support Server:link:https#COLON#//dsc.gg/peppashoppe:false:🎫}{button:Delete:danger:deleteEmbed:false:🗑}}"
	],
	Prefixes: [
		"$getGuildVar[prefix;$guildID;server]",
		"peppa",
		"<@$clientID>",
		"<@!$clientID>"
	],
	Intents: [
		"MessageContent",
		"Guilds",
		"GuildMembers",
		"GuildBans",
		"GuildIntegrations",
		"GuildInvites",
		"GuildVoiceStates",
		"GuildPresences",
		"GuildMessages",
		"GuildMessageReactions",
		"GuildMessageTyping",
		"GuildEmojisAndStickers"
	],
	Tables: ["server", "user", "bot", "message", "chnnls"],
	Events: [
		"onMessage",
		"onInteractionCreate",
		"onFunctionError"
	],
	DisabledFuncs: ["$clientToken"]
};
