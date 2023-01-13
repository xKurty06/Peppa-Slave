module.exports = {
	name: "vouch",
	cmdName: "vouch",
	aliases: [""],
	cmdAliases: "none",
	description:
		"Lets you setup and/or config the Vouch System for this server.",
	example:
		"<Prefix>vouch check\n<Prefix>vouch on\n<Prefix>vouch reset\n<Prefix>vouch set #vouch-here",
	category: "Setup",
	cooldown: "5s",
	usage: "<Prefix>vouch check\n<Prefix>vouch [on | off]\n<Prefix>vouch reset\n<Prefix>vouch set <channel>",
	perms: "Manage Server",
	code: `

$onlyPerms[manageguild;]
$argsCheck[>0;{newEmbed:{author:║ Command Info!:$authorAvatar}{field:$get[arrow] Command's Usage#COLON#:\`\`\`js
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
