module.exports = {
	name: "viu",
	cmdName: "viu",
	aliases: [],
	cmdAliases: "none",
	description: "Viu Premium",
	example: "<Prefix>viu",
	category: "Setup",
	cooldown: "3s",
	usage: "<Prefix>viu",
	perms: "Admin",
	code: `
$color[$get[clr]]
$title[・──── __*V I U   P R E M I U M   P H*__ ────・]
$description[ ឵឵឵឵
 ឵឵឵឵
・─  **PRICES**\`\`\`
✦ ₱150.00 (12 months, shared)

  ⤿ Legally paid via coupon.
  ⤿ 1 device = 1 slot.
  ⤿ Straight sub.\`\`\`

・─  **NOTE**\`\`\`

⤿ Prices may differ depending on the producer or supplier.
⤿ Always inquire about availability.\`\`\`]
$image[https://media.discordapp.net/attachments/1057866510997139477/1058308029830926406/Hdoa9iv9p80qm0KsXFURhKyFM5vCLo9Ai-_t6fhzeW3u49-0qZ0UUuM55rnqDBycbOcs.png?width=611&height=328]
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