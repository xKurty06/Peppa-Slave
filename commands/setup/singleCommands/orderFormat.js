module.exports = {
	name: "orderFormat",
	cmdName: "orderFormat",
	aliases: [],
	cmdAliases: "none",
	description: "Order Format for purchases",
	example: "<Prefix>orderFormat",
	category: "Setup",
	cooldown: "3s",
	usage: "<Prefix>orderFormat",
	perms: "Admin",
	code: `
$color[1;$get[clr]]
$title[1;・──── __*N I T R O / G A M E   C R E D I T S / P R E M I U M   A C C O U N T S   O R D E R   F O R M A T*__ ────・]
$description[1;\`\`\`
~> FORMAT:
឵឵឵឵឵឵឵឵
⤿ Item/s:
⤿ Quantity:
⤿ Mode of Payment:\`\`\`]
$color[2;$get[clr]]
$description[2;・─  **EXAMPLE**\`\`\`
⤿ Nitro Boost/Robux/Netflix
⤿ 1/1k/1 month
⤿ Gcash/Paypal \`\`\`

・─  **NOTE**\`\`\`
~> If you have any additional information, please include it at the bottom of your order.
~> Always include the receipt of your payment in your attachments.
~> Always vouch every after purchase -- no vouch, no warranty.
~> Please comply to the proper format -- failure to comply to the proper format will not be entertained.
~> Tips are greatly appreciated.
~> No rush orders -- rush buyers will not be entertained.
~> Please only ping me in your ticket once.\`\`\`]


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
$let[emoji;<a:peppapigshoppe_pinkstrawberry:1059259780058853436>]
$let[title1;<:peppapigshoppe_n:1059043026724462602><:peppapigshoppe_i:1059042691880595457><:peppapigshoppe_t:1059043424025714739><:peppapigshoppe_r:1059043300386017350><:peppapigshoppe_o:1059043097180389406><:peppapigshoppe_slash:1059347445370331206>
<:peppapigshoppe_g:1059042541405745222><:peppapigshoppe_a:1059041678389940324><:peppapigshoppe_m:1059042954464989196><:peppapigshoppe_e:1059042381871198249>   <:peppapigshoppe_c:1059041905498923128><:peppapigshoppe_r:1059043300386017350><:peppapigshoppe_e:1059042381871198249><:peppapigshoppe_d:1059042080829218866><:peppapigshoppe_i:1059042691880595457><:peppapigshoppe_t:1059043424025714739><:peppapigshoppe_s:1059043362348486656><:peppapigshoppe_slash:1059347445370331206>
<:peppapigshoppe_p:1059043160472436766><:peppapigshoppe_r:1059043300386017350><:peppapigshoppe_e:1059042381871198249><:peppapigshoppe_m:1059042954464989196><:peppapigshoppe_i:1059042691880595457><:peppapigshoppe_u:1059043495882526730><:peppapigshoppe_m:1059042954464989196>   <:peppapigshoppe_a:1059041678389940324><:peppapigshoppe_c:1059041905498923128><:peppapigshoppe_c:1059041905498923128><:peppapigshoppe_o:1059043097180389406><:peppapigshoppe_u:1059043495882526730><:peppapigshoppe_n:1059043026724462602><:peppapigshoppe_t:1059043424025714739><:peppapigshoppe_s:1059043362348486656>   <:peppapigshoppe_o:1059043097180389406><:peppapigshoppe_r:1059043300386017350><:peppapigshoppe_d:1059042080829218866><:peppapigshoppe_e:1059042381871198249><:peppapigshoppe_r:1059043300386017350>   <:peppapigshoppe_f:1059042464872288297><:peppapigshoppe_o:1059043097180389406><:peppapigshoppe_r:1059043300386017350><:peppapigshoppe_m:1059042954464989196><:peppapigshoppe_a:1059041678389940324><:peppapigshoppe_t:1059043424025714739>]
`
};
