module.exports = {
	name: "dm",
	cmdName: "dm",
	aliases: [""],
	cmdAliases: "none",
	description: "Sends user a direct message with bot.",
	example:
		"<Prefix>dm @xKurty Hey how are you?\n<Prefix>dm 698595070198415421 Hey your bot is nice!",
	category: "General",
	cooldown: "5s",
	usage: "<Prefix>dm <user> <message>",
	perms: "none",
	code: `
$sendDM[> $get[msg];$get[user];no]
$memberExists[$get[user];{newEmbed:{title:$get[error] | I couldn't find the user.}{color:$get[clr2]}}]
$let[user;$findUser[$message[1];no]]
$let[msg;$messageSlice[1]]

$argsCheck[>1;{newEmbed:{author:║ Wrong Arguments Given!:$userAvatar}{field:$get[error] Command's Usage#COLON#:\`\`\`js
Aliases: #RIGHT#$get[alias]#LEFT#\n~> Usage:\n$get[usage]\n\n~> Example:\n$get[example]\`\`\`}{footer:$get[params]}{color:$get[clr2]}}]
$cooldown[$get[cd];{newEmbed:{description:$get[error] | Hey! Slow down, you have to wait until \` %sec%.%ms%s \` before running this command again.}{color:$get[clr2]}}]
$deletecommand

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
