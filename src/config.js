module.exports = {
	ErrorMessages: [
		"",
		"{newEmbed:{description:❌ | Errors Have Occured!\nIf this error keeps repeating, you should report it immediately in our Support Server. Click the button below.}{color:FF1010}}{delete:10s}{deletecommand}",
		"{actionRow:{button:Support Server:link:https#COLON#//dsc.gg/peppashoppe:false:🎫}{button:Delete:danger:deleteEmbed:false:🗑}}"
	],
	Prefixes: [
		"$getServerVar[prefix]",
		"peppa",
		"<@$clientID>",
		"<@!$clientID>"
	],
	Intents: [
		"guilds",
		"guildMembers",
		"guildBans",
		"guildIntegrations",
		"guildInvites",
		"guildVoiceStates",
		"guildPresences",
		"guildMessages",
		"guildMessageReactions",
		"guildMessageTyping",
		"guildEmojisAndStickers"
	],
	Tables: ["server", "user", "bot", "message"],
	Caches: [
		"guilds",
		"messages",
		"channels",
		"users",
		"applicationCommands",
		"applicationCommandPermissions",
		"permissionOverwrites",
		"presences",
		"reactions",
		"reactionUsers",
		"roles",
		"stageInstances",
		// "threads",
		// "threadMembers",
		"guildApplicationCommand",
		"guildBans",
		"guildChannels",
		"guildEmojis",
		"guildEmojiRoles",
		"guildInvites",
		"guildMembers",
		"guildMemberRoles",
		"guildStickers"
	]
};
