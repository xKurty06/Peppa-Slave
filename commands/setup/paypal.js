module.exports = {
	name: "paypal",
	cmdName: "paypal",
	aliases: [],
	cmdAliases: "none",
	description: "Paypal",
	example: "<Prefix>paypal",
	category: "Setup",
	cooldown: "3s",
	usage: "<Prefix>paypal",
	perms: "Admin",
	code: `
$color[$get[clr]]
$title[・──── __*P A Y P A L*__ ────・]
$description[ ឵឵឵឵
 ឵឵឵឵
・─  **IMPORTANT**\`\`\`
~> Ping me in your ticket 
~> Family & Friends
~> +15% additional fee\`\`\`

・─  **NOTE**\`\`\`
~> Always include payment receipt.
~> No rush orders. We're doing all we can to get you your nitro as soon as possible.\`\`\`]
$image[https://cdn.discordapp.com/attachments/1057866510997139477/1058050023927062558/IMG_4417.png]
$deletecommand

$cooldown[$get[cd];{newEmbed:{description:$get[error] | Hey! Slow down, you have to wait until \` %sec%.%ms%s \` before running this command again.}{color:$get[clr2]}}]

$onlyForIDs[$joinSplitText[;];]
$textSplit[$getVar[botOwners;bot];/]
$let[arrow;<#COLON#arrow2#COLON#1055144562257047702>]
$let[error;❌]
$let[check;✅]
$let[clr2;$getServerVar[clr2;;server]]
$let[clr;$getServerVar[clr;;server]]
$let[params;<X> = Required, \(X?\) = Optional, #RIGHT#A | B | C#LEFT# = Options]
$let[alias;$commandInfo[$commandName;cmdAliases]]
$let[category;$commandInfo[$commandName;category]]
$let[desc;$commandInfo[$commandName;description]]
$let[cd;$commandInfo[$commandName;cooldown]]
$let[perms;$commandInfo[$commandName;perms]]
$let[name;$commandInfo[$commandName;cmdName]]
$let[usage;$replaceText[$commandInfo[$commandName;usage];<Prefix>;$get[prefix]]]
$let[example;$replaceText[$commandInfo[$commandName;example];<Prefix>;$get[prefix]]]
$let[prefix;$getServerVar[prefix;;server]]
`
};
