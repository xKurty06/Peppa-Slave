module.exports = {
	name: "spotify",
	cmdName: "spotify",
	aliases: [],
	cmdAliases: "none",
	description: "Spotify Premium",
	example: "<Prefix>spotify",
	category: "Setup",
	cooldown: "3s",
	usage: "<Prefix>spotify",
	perms: "Admin",
	code: `
$color[$get[clr]]
$title[・──── __*S P O T I F Y*__ ────・]
$description[ ឵឵឵឵
 ឵឵឵឵
・─  **SPOTIFY PREMIUM SOLO**\`\`\`
~>  ₱80.00 
~>  2 months
~>  +₱5.00 if own gmail account
~>  Via invite
~>  Straight subs
~>  Legally paid
~>  No hold
~>  Full warranty if may vouch\`\`\`]
$image[https://cdn.discordapp.com/attachments/1057866510997139477/1058067730349162657/IMG_4463.jpg]
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
