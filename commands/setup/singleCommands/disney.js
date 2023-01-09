module.exports = {
	name: "disney",
	cmdName: "disney",
	aliases: [],
	cmdAliases: "none",
	description: "Disney Plus",
	example: "<Prefix>disney",
	category: "Setup",
	cooldown: "3s",
	usage: "<Prefix>disney",
	perms: "Admin",
	code: `
$color[$get[clr]]
$title[・──── __*D I S N E Y+   P R E M I U M   P H*__ ────・]
$description[ ឵឵឵឵
 ឵឵឵឵
・─  **PRICES**\`\`\`
✦ ₱120.00 (1 month, shared)

  ⤿ Legally paid, not carded.
  ⤿ 1 device per slot.
  ⤿ Not prone to screen limit.
  ⤿ 6 slots per account.

✦ ₱430.00 (1 month, solo)

  ⤿ Legally paid, no hold.
  ⤿ Provide your number. \`\`\`

・─ **NOTE**\`\`\`
⤿ Prices may differ depending on the producer or supplier.
⤿ Always inquire about availability.\`\`\`]
$image[https://media.discordapp.net/attachments/1057866510997139477/1058307340270571530/disney-plus-logo-1143358.png?width=611&height=328]
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
