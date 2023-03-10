module.exports = {
	name: "other",
	cmdName: "other",
	aliases: [],
	cmdAliases: "none",
	description: "Other Premium Items",
	example: "<Prefix>other",
	category: "Setup",
	cooldown: "3s",
	usage: "<Prefix>other",
	perms: "Admin",
	code: `
$color[$get[clr]]
$title[・──── __*O T H E R S*__ ────・]
$description[ ឵឵឵឵
 ឵឵឵឵
・─  **ITEMS**\`\`\`
✦ Skillshare
✦ Numerade
✦ Turnitin 
✦ Zoom Pro
✦ Academia
✦ Unlock Service
✦ More...\`\`\`

・─ **NOTE**\`\`\`
⤿ You can request the price list through the inquiry channel or by pinging me on your ticket. You can also inquire about the availability of any premium accounts or services not listed in the list.
⤿ Prices may differ depending on the producer or supplier.\`\`\`]
$image[]
$deletecommand

$cooldown[$get[cd];{newEmbed:{description:$get[error] | Hey! Slow down, you have to wait until \` %sec%.%ms%s \` before running this command again.}{color:$get[clr2]}}]

$onlyForIDs[$joinSplitText[;];]
$textSplit[$getVar[owners;bot];/]
$let[arrow;<a#COLON#peppapigshoppe_arrow#COLON#1059035766115815466>]
$let[error;❌]
$let[check;✅]
$let[clr2;$getGuildVar[clr2;$guildID;server]]
$let[clr;$getGuildVar[clr;$guildID;server]]
$let[params;< > = Required, \( \) = Optional, #RIGHT#a | b | c#LEFT# = Choices]
$let[alias;$commandInfo[$commandName;cmdAliases]]
$let[category;$commandInfo[$commandName;category]]
$let[desc;$commandInfo[$commandName;description]]
$let[cd;$commandInfo[$commandName;cooldown]]
$let[perms;$commandInfo[$commandName;perms]]
$let[name;$commandInfo[$commandName;cmdName]]
$let[usage;$replaceText[$commandInfo[$commandName;usage];<Prefix>;$get[prefix]]]
$let[example;$replaceText[$commandInfo[$commandName;example];<Prefix>;$get[prefix]]]
$let[prefix;$getGuildVar[prefix;$guildID;server]]
`
};
