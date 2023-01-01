module.exports = {
	name: "gcash",
	cmdName: "gcash",
	aliases: [],
	cmdAliases: "none",
	description: "GCash Informations",
	example: "<Prefix>gcash",
	category: "Setup",
	cooldown: "3s",
	usage: "<Prefix>gcash",
	perms: "Admin",
	code: `
$color[$get[clr]]
$title[・──── __*G C A S H*__ ────・]
$description[ ឵឵឵឵
 ឵឵឵឵
・─  **GCASH**\`\`\`
~> 09076080723
~> GL P.\`\`\`

・─  **NOTE**\`\`\`
~> Always include payment receipt.
~> No rush orders.We're doing all we can to get you your nitro as soon as possible.\`\`\`]
$image[https://cdn.discordapp.com/attachments/1057866510997139477/1058049552906727516/IMG_4416.png]
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
