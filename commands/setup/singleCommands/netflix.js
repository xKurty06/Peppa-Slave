module.exports = {
	name: "netflix",
	cmdName: "netflix",
	aliases: [],
	cmdAliases: "none",
	description: "Netflix Premium",
	example: "<Prefix>netflix",
	category: "Setup",
	cooldown: "3s",
	usage: "<Prefix>netflix",
	perms: "Admin",
	code: `
$color[$get[clr]]
$title[・──── __*N E T F L I X*__ ────・]
$description[ ឵឵឵឵
 ឵឵឵឵
・─  **NETFLIX SOLO (NO HOLD)**\`\`\`
—>  ₱580.00
—> 1 month
—>  Without tricks
—>  5-10 devices
—>  GC Method
—>  No hold/wipe
—>  Full warranty if may vouch\`\`\`

・─  **NETFLIX SHARED (NO HOLD)**\`\`\`
—>  ₱145.00 (1 month)
—>  ₱265.00 (2 months)
—>  ₱380.00 (3 months)
—>  Solo profile
—>  GC Method
—>  No hold/wipe
—>  Can use up to 2 devices
—>  Full warranty if may vouch\`\`\`

・─  **NETFLIX SHARED PROFILE (NO HOLD)**\`\`\`
—>  ₱90.00
—>  1 month
—>  Strictly for 1 device only
—>  GC Method
—>  No hold/wipe
—>  Full warranty if may vouch\`\`\`

・─  **NETFLIX SHARED (LESS HOLD)**\`\`\`
—>  ₱170.00 (3 months, 1 device)
—>  ₱230.00 (3 months, 2 devices)
—>  Globe Billed
—>  Less hold/wipe
—>  Renewed/Fresh account
—>  With form & penalty
—>  Must be willing to wait
—> Full warranty if may vouch\`\`\`]
$image[https://cdn.discordapp.com/attachments/1057866510997139477/1058071175282049064/IMG_4464.jpg]
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
