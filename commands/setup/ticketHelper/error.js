module.exports = {
	name: "ticket",
	cmdName: "ticket",
	aliases: [""],
	cmdAliases: "none",
	description:
		"Lets you setup and/or config the Ticket Helper System for this server. If the system is enabled, I am gonna send an order form embed in a ticket channel whenever the ticket is created.",
	example:
		"<Prefix>ticket check\n<Prefix>ticket on\n<Prefix>ticket reset\n<Prefix>ticket set 123456789012345678 //Example output: #TICKET-CATEGORY",
	category: "Setup",
	cooldown: "5s",
	usage: "<Prefix>ticket check\n<Prefix>ticket [on | off]\n<Prefix>ticket reset\n<Prefix>ticket set <ticketCategoryID>",
	perms: "Manage Server",
	code: `

$onlyPerms[manageserver;]
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
