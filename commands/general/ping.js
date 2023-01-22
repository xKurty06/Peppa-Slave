module.exports = {
	name: "ping",
	cmdName: "ping",
	aliases: [""],
	cmdAliases: "none",
	description: "Returns bot's overall ping.",
	example: "<Prefix>ping",
	category: "General",
	cooldown: "3s",
	usage: "<Prefix>ping",
	perms: "none",
	code: `
$color[$get[clr]]
$addField[Average Ping;\`\`\`js\n$get[average] ms\`\`\`;yes]
$addField[Database Ping;\`\`\`js\n$get[db] ms\`\`\`;yes]
$addField[Message Ping;\`\`\`js\n$get[msg] ms\`\`\`;yes]
$addField[Ping;\`\`\`js\n$get[ping] ms\`\`\`;yes]
$author[║ Bot Ping;$userAvatar]
$reply[$messageID;no]

$let[average;$round[$math[($get[ping]+$get[msg]+$get[db])/3]]]
$let[db;$databasePing]
$let[msg;$messagePing]
$let[ping;$ping]
$argsCheck[;{newEmbed:{author:║ Wrong Arguments Given!:$userAvatar}{field:$get[error] Command's Usage#COLON#:\`\`\`js
Aliases: #RIGHT#$get[alias]#LEFT#\n~> Usage:\n$get[usage]\n\n~> Example:\n$get[example]\`\`\`}{footer:$get[params]}{color:$get[clr2]}}]
$cooldown[$get[cd];{newEmbed:{description:$get[error] | Hey! Slow down, you have to wait until \` %sec%.%ms%s \` before running this command again.}{color:$get[clr2]}}]

$let[arrow;<a#COLON#peppapigshoppe_arrow#COLON#1059035766115815466>]
$let[error;❌]
$let[check;✅]
$let[clr2;$getServerVar[clr2;$guildID;server]]
$let[clr;$getServerVar[clr;$guildID;server]]
$let[params;< > = Required, \( \) = Optional, #RIGHT#a | b | c#LEFT# = Choices]
$let[alias;$commandInfo[$commandName;cmdAliases]]
$let[category;$commandInfo[$commandName;category]]
$let[desc;$commandInfo[$commandName;description]]
$let[cd;$commandInfo[$commandName;cooldown]]
$let[perms;$commandInfo[$commandName;perms]]
$let[name;$commandInfo[$commandName;cmdName]]
$let[usage;$replaceText[$commandInfo[$commandName;usage];<Prefix>;$get[prefix]]]
$let[example;$replaceText[$commandInfo[$commandName;example];<Prefix>;$get[prefix]]]
$let[prefix;$getServerVar[prefix;$guildID;server]]
`
};
