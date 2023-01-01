module.exports = {
	name: "wordtune",
	cmdName: "wordtune",
	aliases: [],
	cmdAliases: "none",
	description: "Word Tune Premium",
	example: "<Prefix>wordtune",
	category: "Setup",
	cooldown: "3s",
	usage: "<Prefix>wordtune",
	perms: "Admin",
	code: `
$color[$get[clr]]
$title[・──── __*W O R D T U N E   ( S H A R E D )*__ ────・]
$description[ ឵឵឵឵
 ឵឵឵឵
・─  **PRICES**\`\`\`
✦ ₱30.00 (1 month)
✦ ₱40.00 (2 months)
✦ ₱70.00 (3 months)\`\`\`

・─  **INFO**\`\`\`
⤿ A solo account is also available#SEMI# please ping me in the inquiry channel or your ticket for a price list.
⤿ Prices may differ depending on the producer or supplier.\`\`\`]
$image[https://media.discordapp.net/attachments/1057866510997139477/1058299479184384031/wordtune-logo-1024x356.png?width=683&height=237]
$deletecommand

$cooldown[$get[cd];{newEmbed:{description:$get[error] | Hey! Slow down, you have to wait until \` %sec%.%ms%s \` before running this command again.}{color:$get[clr2]}}]

$onlyForIDs[$joinSplitText[;];]
$textSplit[$getVar[owners;bot];/]
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
`
};