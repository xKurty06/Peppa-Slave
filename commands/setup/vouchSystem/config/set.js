module.exports = {
	name: "vouch set",
	cmdName: "vouch set",
	aliases: [""],
	cmdAliases: "none",
	description: "Lets you set vouch channel.",
	example: "<Prefix>vouch set #vouch-here",
	category: "Setup",
	cooldown: "5s",
	usage: "<Prefix>vouch set <#channel>",
	perms: "Manage Server",
	code: `
$addTimestamp[]
$color[$get[clr]]
$footer[$userTag]
$description[> Vouch Channel has been succesfully set to <#$getServerVar[vouchChannel;$guildID;server]> and system has been \` $getServerVar[vouchStatus;$guildID;server] \`!]
$author[║ Vouch System Channel;$authorAvatar]
$reply[$messageID;no]

$wait[1s]

$setServerVar[vouchStatus;enabled;$guildID;server]
$setServerVar[vouchChannel;$get[channelID];$guildID;server]

$onlyIf[$serverChannelExists[$get[channelID]]==true;{newEmbed:{description:$get[error] | I couldn't find \` $message \` channel.}{color:$get[clr2]}}]
$onlyPerms[manageserver;{newEmbed:{description:$get[error] | You don't have enough permissions <\` $get[perms] \`> to use this command!}{color:$get[clr2]}}]
$argsCheck[>0;{newEmbed:{author:║ Wrong Arguments Given!:$authorAvatar}{field:$get[error] Command's Usage#COLON#:\`\`\`js
Aliases: #RIGHT#$get[alias]#LEFT#\n~> $get[usage]\n~> $get[example]\`\`\`}{footer:$get[params]}{footer:$get[params]}{color:$get[clr2]}}]
$cooldown[$get[cd];{newEmbed:{description:$get[error] | Hey! Slow down, you have to wait until \` %sec%.%ms%s \` before running this command again.}{color:$get[clr2]}}]

$let[channelID;$findChannel[$message;no]]
$let[arrow;<#COLON#arrow2#COLON#1055144562257047702>]
$let[error;❌]
$let[check;✅]
$let[clr2;$getServerVar[clr2;$guildID;server]]
$let[clr;$getServerVar[clr;$guildID;server]]
$let[params;<X> = Required, \(X?\) = Optional, #RIGHT#A | B | C#LEFT# = Options]
$let[alias;$commandInfo[$commandName;cmdAliases]]
$let[category;$commandInfo[$commandName;category]]
$let[desc;$commandInfo[$commandName;description]]
$let[cd;$commandInfo[$commandName;cooldown]]
$let[perms;$commandInfo[$commandName;perms]]
$let[name;$commandInfo[$commandName;cmdName]]
$let[usage;$replaceText[$commandInfo[$commandName;usage];<Prefix>;$get[prefix]]]
$let[example;$replaceText[$commandInfo[$commandName;example];<Prefix>;$get[prefix]]]
$let[prefix;$getServerVar[prefix;$guildID;server]]
`}