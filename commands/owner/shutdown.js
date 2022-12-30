module.exports = {
	name: "shutdown",
	cmdName: "shutdown",
	aliases: ["shutdown", "killBot", "kill"],
	cmdAliases: "killBot, kill",
	description: "Lets you to shutdown/kill the bot.",
	category: "Owner",
	example: "<Prefix>kill",
	cooldown: "3s",
	usage: "<Prefix>shutdown",
	perms: "none",
	code: `
$suppressErrors
$deletecommand
$wait[3s]
$addCmdReactions[✅]
$shutdown
$argsCheck[0;{newEmbed:{author:║ Wrong Arguments Given!:$authorAvatar}{field:$get[error] Command's Usage#COLON#:\`\`\`js
Aliases: #RIGHT#$get[alias]#LEFT#\n~> $get[usage]\n~> $get[example]\`\`\`}{footer:$get[params]}{footer:$get[params]}{color:$get[clr2]}}]
$cooldown[$get[cd];{newEmbed:{description:$get[error] | Hey! Slow down, you have to wait until \` %sec%.%ms%s \` before running this command again.}{color:$get[clr2]}}]

$onlyForIDs[$joinSplitText[;];]
$textSplit[$getVar[botOwners;bot];/]
$let[error;$get[error]]
$let[check;✅]
$let[clr2;$getServerVar[clr2;;server]]
$let[clr;$getServerVar[clr;;server]]
$let[params;<X> = Required, \(X?\) = Optional, #RIGHT#A | B | C#LEFT# = Options]
$let[alias;$commandInfo[$commandName;cmdAliases]]
$let[category;$commandInfo[$commandName;category]]
$let[desc;$commandInfo[$commandName;description]]
$let[cd;$commandInfo[$commandName;cooldown]]
$let[perms;$commandInfo[$commandName;perms]]
$let[name;$commandInfo[$commandName;cmdName]]
$let[usage;$replaceText[$commandInfo[$commandName;usage];<Prefix>;$get[prefix]]]
$let[example;$replaceText[$commandInfo[$commandName;example];<Prefix>;$get[prefix]]]
$let[prefix;$getServerVar[prefix;;server]]
`
};
