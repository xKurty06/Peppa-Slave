module.exports = {
	name: "robux",
	cmdName: "robux",
	aliases: [],
	cmdAliases: "none",
	description: "Roblox robux",
	example: "<Prefix>robux",
	category: "Setup",
	cooldown: "3s",
	usage: "<Prefix>robux",
	perms: "Admin",
	code: `
$color[$get[clr]]
$title[・──── __*R O B U X*__ ────・]
$description[ ឵឵឵឵
 ឵឵឵឵
・─  **PRICES**\`\`\`
✦ ₱270.00 = 1k robux (covered tax)
✦ ₱200.00 = 1k robux (not covered tax)
✦ ₱50.00 = 100 robux (tingi-tingi)\`\`\`

・─  **NOTE**\`\`\`
⤿ Payment via game pass/shirt.
⤿ Prices may differ depending on the producer or supplier.
⤿ Always inquire about availability.\`\`\`

・─  **FAQ:**
> **Q** __What is the difference between covered and non-covered tax?__
**A.** Since it is stated for the pricing is 1,000 covered tax and 1,000 non-covered tax, we will pay the Roblox tax which is 30% for the covered tax and nothing will change for the non-covered tax.

> **Q.** __What will change?__
**B.** Gamepass price, covered will be 1,429, non-covered 1,000. For the covered tax you'll receive exactly 1,000 robux, for the non-covered tax you'll receive 700 robux (30% deducted by Roblox).

> **Q.** __Are retail robux covered tax?__
**C.** Yes.

**⤿ For any more inquiries, you can direct message me or ping me in queries channel. (<@886620575735373825> | $userTag[886620575735373825])**
]
$image[https://media.discordapp.net/attachments/1057866510997139477/1059021651850821692/ECCEB455-AAB6-4167-8445-64E30A86AB2B.png?width=554&height=311]
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
