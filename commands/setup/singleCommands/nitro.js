module.exports = {
	name: "nitro",
	cmdName: "nitro",
	aliases: [],
	cmdAliases: "none",
	description: "Discord Nitro",
	example: "<Prefix>nitro",
	category: "Setup",
	cooldown: "3s",
	usage: "<Prefix>nitro",
	perms: "Admin",
	code: `
$color[$get[clr]]
$title[・──── __*D I S C O U N T E D   N I T R O   S U B S C R I P T I O N*__ ────・]
$description[ ឵឵឵឵
 ឵឵឵឵
・─  **NITRO BOOST MONTHLY**\`\`\`
~> ₱ 95.00 (single purchase)
~> ₱ 90.00 (booster, 3+ purchases)
~> ₱ 90.00 (bulk, 5+ purchases)\`\`\`

・─  **NITRO BOOST YEARLY**\`\`\`
~> ₱ 1,099 (made to order)\`\`\`

・─ **NOTE**\`\`\`
~> This is just standard pricing#SEMI# however, nitro boost prices may vary depending on the producer and supplier.
~> Always keep an eye on the shop-latest's channel for price changes and sales.
~> People who buy 10 or more monthly nitros will also receive a minor discount.
~> Once you vouch in my shop, including a screenshot and following the proper format, the warranties will be activated.
~> Always inquire about availability, as we are constantly restocking our inventory.
~> We are available for a paid reservation but must be prepared to wait. Those with reservations will be prioritized once the nitro is restocked.\`\`\`]
$image[https://media.discordapp.net/attachments/1057866510997139477/1058284752114827354/DiscordLogo-652x367.jpg?width=435&height=245]
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
