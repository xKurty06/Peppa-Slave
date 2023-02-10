module.exports = [
	{
		name: "help",
		cmdName: "help",
		aliases: ["welp"],
		cmdAliases: "welp",
		description: "Opens this help panel.",
		example: "<Prefix>help",
		category: "General",
		cooldown: "3s",
		usage: "<Prefix>help",
		perms: "none",
		code: `
$addTimestamp
$color[$get[clr]]
$footer[$userTag;$userAvatar]
$addField[Server Prefix#COLON#;\` $get[prefix] \`;yes]

$addField[Additional Resources#COLON#;#RIGHT#\`Server Invite\`#LEFT#(https#COLON#//dsc.gg/peppashoppe) | #RIGHT#\`DM to avail\`#LEFT#(https#COLON#//discord.com/users/886620575735373825) | #RIGHT#\`Bump Server\`#LEFT#(https#COLON#//disboard.org/server/1057338848247554111) | #RIGHT#\`Bot dev\`#LEFT#(https#COLON#//disboard.org/server/698595070198415421);no]
$addField[ ឵឵឵឵;\n> $get[arrow] Curious what am I for? Well I'm a bot focuses on helping \` $serverName[1057338848247554111] \` server only, just to help improve and to make life easier for members.\n\n> $get[arrow] Need any help using $client[user.username] bot? Run the command \` $get[prefix]commands \` to learn more about my commands. If you want know about my specific commands or modules then run the command \` $get[prefix]command <command name/module> \`;no]
$addField[Commands Count (all)#COLON#;\` $get[cmdCount] \`;yes]
$author[║ Help Panel;$serverIcon]
$reply[$messageID;no]

$argsCheck[0;]
$cooldown[$get[cd];{newEmbed:{description:$get[error] | Hey! Slow down, you have to wait until \` %sec%.%ms%s \` before running this command again.}{color:$get[clr2]}}]

$let[cmdCount;$getVar[commandsCount;bot]]
$let[arrow;<a#COLON#peppapigshoppe_arrow#COLON#1059035766115815466>]
$let[error;❌]
$let[check;✅]
$let[clr2;$getGuildVar[clr2;$guildID;server]]
$let[clr;$getGuildVar[clr;$guildID;server]]
$let[params;<X> = Required, \(X?\) = Optional, #RIGHT#\`A | B | C\`#LEFT# = Options]
$let[alias;$commandInfo[$commandName;cmdAliases]]
$let[category;$commandInfo[$commandName;category]]
$let[desc;$commandInfo[$commandName;description]]
$let[cd;$commandInfo[$commandName;cooldown]]
$let[perms;$commandInfo[$commandName;perms]]
$let[name;$commandInfo[$commandName;cmdName]]
$let[usage;$replaceText[$commandInfo[$commandName;usage];<Prefix>;$get[prefix]]]
$let[example;$replaceText[$commandInfo[$commandName;example];<Prefix>;$get[prefix]]]
$let[prefix;$getGuildVar[prefix;$guildID;server]]
`
	},
	{
		name: "$alwaysExecute",
		cmdName: "",
		aliases: [""],
		cmdAliases: "none",
		description: "Mention me to get help about my information or commands.",
		example: "@Peppa's Slave#9155",
		category: "general",
		cooldown: "5s",
		usage: "@mentionBot",
		perms: "none",
		code: `
$addTimestamp
$color[$get[clr]]
$footer[$userTag]
$author[║ My prefix;$userAvatar]
$description[ ឵឵ ឵឵ ឵឵឵឵>> Hey **$username**!My prefix for this server is **\` $get[prefix] \`**, $if[$checkUserPerms[$authorID;manageguild]==true; you can customize it by running this command \` $get[prefix]prefix <prefix> \`]]
$reply[$messageID;no]

$cooldown[$get[cd];]
$onlyIf[$findUser[$message]==$clientID;]

$let[arrow;<a#COLON#peppapigshoppe_arrow#COLON#1059035766115815466>]
$let[error;❌]
$let[check;✅]
$let[clr2;$getGuildVar[clr2;$guildID;server]]
$let[clr;$getGuildVar[clr;$guildID;server]]
$let[params;<X> = Required, \(X?\) = Optional, #RIGHT#\`A | B | C\`#LEFT# = Options]
$let[alias;$commandInfo[$commandName;cmdAliases]]
$let[category;$commandInfo[$commandName;category]]
$let[desc;$commandInfo[$commandName;description]]
$let[cd;$commandInfo[$commandName;cooldown]]
$let[perms;$commandInfo[$commandName;perms]]
$let[name;$commandInfo[$commandName;cmdName]]
$let[usage;$replaceText[$commandInfo[$commandName;usage];<Prefix>;$get[prefix]]]
$let[example;$replaceText[$commandInfo[$commandName;example];<Prefix>;$get[prefix]]]
$let[prefix;$getServerVar[prefix;$guildID;server]]`
	}
];
