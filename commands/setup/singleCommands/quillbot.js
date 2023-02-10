module.exports = {
	name: "quillbot",
	cmdName: "quillbot",
	aliases: [],
	cmdAliases: "none",
	description: "Quillbot Premium",
	example: "<Prefix>quillbot",
	category: "Setup",
	cooldown: "3s",
	usage: "<Prefix>quillbot",
	perms: "Admin",
	code: `
$color[$get[clr]]
$title[・──── __*Q U I L L B O T*__ ────・]
$description[ ឵឵឵឵
 ឵឵឵឵
・─  **PRICES**\`\`\`
✦ ₱60.00 (1 month, shared)
✦ ₱90.00 (1 month, solo)\`\`\`

・─  **NOTE**\`\`\`
 ⤿ 1 device ONLY for shared, and   4-5 devices for solo
⤿ Prices may differ depending on the producer or supplier.
⤿ Always inquire about availability.\`\`\`]
$image[https://media.discordapp.net/attachments/1057866510997139477/1058302698736341042/main-qimg-6d007768254d7fd7d1fbc17ce025f1e0.png?width=401&height=216]
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
