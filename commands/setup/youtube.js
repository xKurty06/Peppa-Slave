module.exports = {
	name: "youtube",
	cmdName: "youtube",
	aliases: [],
	cmdAliases: "none",
	description: "Youtube Premium",
	example: "<Prefix>youtube",
	category: "Setup",
	cooldown: "3s",
	usage: "<Prefix>youtube",
	perms: "Admin",
	code: `
$color[$get[clr]]
$title[・──── __*Y O U T U B E   P R E M I U M   S O L O*__ ────・]
$description[ ឵឵឵឵
 ឵឵឵឵
・─  **PRICES**\`\`\`
✦ ₱70.00 (4 months)\`\`\`

・─  **NOTE**\`\`\`
⤿ An email account is provided.
⤿ Prices may differ depending on the producer or supplier.
⤿ Always inquire about availability.\`\`\`]
$image[https://media.discordapp.net/attachments/1057866510997139477/1058305526892593182/Youtube-Logo-Font-3.png?width=600&height=367]
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