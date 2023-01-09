module.exports = {
	name: "verifyBanner",
	cmdName: "verifyBanner",
	aliases: [],
	cmdAliases: "none",
	description: "Verification Banner",
	example: "<Prefix>verifyBanner",
	category: "Setup",
	cooldown: "3s",
	usage: "<Prefix>verifyBanner",
	perms: "Admin",
	code: `
$color[$get[clr]]
$image[https://media.discordapp.net/attachments/1057338849661026387/1059371007175049279/BE962C47-CED3-42ED-AFF3-BF8DAE602049.png?width=720&height=405]
$deletecommand

$cooldown[$get[cd];{newEmbed:{description:$get[error] | Hey! Slow down, you have to wait until \` %sec%.%ms%s \` before running this command again.}{color:$get[clr2]}}]

$onlyForIDs[$joinSplitText[;];]
$textSplit[$getVar[owners;bot];/]
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
