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
$image[https://media.discordapp.net/attachments/1057866510997139477/1058315475282571264/EEE20EF1-25D3-4CB6-89E2-43393AF886F0.jpg?width=611&height=328]
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
