module.exports = {
	name: "vouch check",
	cmdName: "vouch check",
	aliases: [""],
	cmdAliases: "none",
	description: "Lets you check the status of vouch system.",
	example: "<Prefix>vouch check",
	category: "Setup",
	cooldown: "5s",
	usage: "<Prefix>vouch check",
	perms: "Manage Server",
	code: `
$addTimestamp
$color[$get[clr]]
$footer[$userTag]
$addField[Status#COLON#;$get[status];true]
$addField[Channel#COLON#;$get[resultChannel];true]
$author[║ Vouch System;$userAvatar]
$reply[$messageID;false]

$onlyPerms[manageguild;{newEmbed:{description:$get[error] | You don't have enough permissions <\` $get[perms] \`> to use this command!}{color:$get[clr2]}}]
$argsCheck[0;{newEmbed:{author:║ Wrong Arguments Given!:$userAvatar}{field:$get[error] Command's Usage#COLON#:\`\`\`js
Aliases: #RIGHT#$get[alias]#LEFT#\n~> Usage:\n$get[usage]\n\n~> Example:\n$get[example]\`\`\`}{footer:$get[params]}{color:$get[clr2]}}]
$cooldown[$get[cd];{newEmbed:{description:$get[error] | Hey! Slow down, you have to wait until \` %sec%.%ms%s \` before running this command again.}{color:$get[clr2]}}]

$let[resultChannel;$replaceText[$replaceText[$checkCondition[$get[vChannel]==];true;\` not set \`];false;<#$get[vChannel]>]]
$let[vChannel;$getGuildVar[vouchChannel;$guildID;server]]
$let[status;$getGuildVar[vouchStatus;$guildID;server]]
$let[arrow;<a#COLON#peppapigshoppe_arrow#COLON#1059035766115815466>]
$let[error;❌]
$let[check;✅]
$let[clr2;$getGuildVar[clr2;$guildID;server]]
$let[clr;$getGuildVar[clr;$guildID;server]]
$let[params;< > = Required, \( \) = Optional, #RIGHT#a | b | c#LEFT# = Choices]
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
};
