module.exports = {
	name: "reportFormat",
	cmdName: "reportFormat",
	aliases: [],
	cmdAliases: "none",
	description: "Report Format for purchases",
	example: "<Prefix>reportFormat",
	category: "Setup",
	cooldown: "3s",
	usage: "<Prefix>reportFormat",
	perms: "Admin",
	code: `
$color[1;$get[clr]]
$title[1;・──── __*N I T R O ឵឵឵឵ ឵឵឵឵ ឵឵឵឵R E P O R T ឵឵឵឵ ឵឵឵឵ ឵឵឵឵F O R M A T*__ ────・]
$description[1;\`\`\`
~> FORMAT:

⤿ Discord User & Tag:
⤿ Nitro Gift Link Given:
⤿ Claimer Username:
⤿ Date of Purchase:
⤿ Remaining Days/Months:
⤿ Screenshot of Revoke: (Check the email that was sent by discord to your gmail account):
⤿ Screenshot/Link Message of Vouch:\`\`\`]

$color[2;$get[clr]]
$title[2;・──── __*P R E M I U M ឵឵឵឵ ឵឵឵឵ ឵឵឵឵A C C O U N T ឵឵឵឵ ឵឵឵឵ ឵឵឵឵R E P O R T ឵឵឵឵ ឵឵឵឵ ឵឵឵឵F O R M A T*__ ────・]
$description[2;\`\`\`
~> FORMAT:

⤿ Discord User & Tag:
⤿ Premium Purchased:
⤿ Subscription: 
⤿ Working Email:
⤿ Shared/Solo/Family Head:
⤿ Replacement Email:
⤿ Working Password:
⤿ Date of Purchase:
⤿ Date Reported:
⤿ Days/Months Used:
⤿ Remaining Days/Months:
⤿ Issue :
⤿ Screenshot of the Issue:
⤿ Screenshot/Link Message of Vouch (Proof of Log In):\`\`\`]

$color[3;$get[clr]]
$description[3;・─  **NOTE**\`\`\`
~> If you have any additional information, please include it at the bottom of your report.
~> Always include screenshots of the email and your vouch in your attachments.
~> No vouch, no warranty.
~> Strictly follow to the proper format and reporting hours of 8:00 a.m. to 5:00 p.m. -- failure to comply to the proper format and reporting time frame voids the warranty.
~> Please, no rush reports -- your reports have been noted, and we will post updates about them#SEMI# any rush reports will have their warranties voided.
~> Please only ping me in your ticket once.\`\`\`]


$deletecommand

$cooldown[$get[cd];{newEmbed:{description:$get[error] | Hey! Slow down, you have to wait until %sec%.%ms%s before running this command again.}{color:$get[clr2]}}]

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
