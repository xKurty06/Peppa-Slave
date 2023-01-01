module.exports = [
	{
		name: "eval5",
		cmdName: "eval5",
		aliases: ["ev", "ev5", "aoi5"],
		cmdAliases: "aoi5, ev5",
		category: "Owner",
		description: "evals command/message with aoi.js",
		cooldown: "none",
		example: "<Prefix>eval $authorID",
		usage: "<Prefix>eval <code>",
		perms: "none",
		error: "$channelSendMessage[911995913885581353;```js\nError: $error```]",
		code: `
$eval[$message;no;yes;yes;no]
$argsCheck[>0;{newEmbed:{author:║ Wrong Arguments Given!:$authorAvatar}{field:<a:errors_args:903510494751649852> Command's Usage#COLON#:\`\`\`js
Aliases: #RIGHT#$get[alias]#LEFT#\n~> $get[usage]\n~> $get[example]\`\`\`}{footer:$get[params]}{footer:$get[params]}{color:$get[clr2]}}]

$onlyForIDs[$joinSplitText[;];]
$textSplit[$getVar[botOwners;bot];/]

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
	},
	{
		name: "eval4",
		cmdName: "eval4",
		aliases: ["ev4", "aoi4"],
		cmdAliases: "aoi4, ev4",
		category: "Owner",
		description: "evals command/message with aoi.js",
		cooldown: "none",
		example: "<Prefix>eval $authorID",
		usage: "<Prefix>eval <code>",
		perms: "none",
		error: "$channelSendMessage[911995913885581353;```js\nError: $error```]",
		$if: "v4",
		code: `
$eval[$message;no;yes;yes;no]
$argsCheck[>0;{newEmbed:{author:║ Wrong Arguments Given!:$authorAvatar}{field:<a:errors_args:903510494751649852> Command's Usage#COLON#:\`\`\`js
Aliases: #RIGHT#$get[alias]#LEFT#\n~> $get[usage]\n~> $get[example]\`\`\`}{footer:$get[params]}{footer:$get[params]}{color:$getServerVar[clr;$guildID;server]}}]
$onlyForIDs[$joinSplitText[;];]
$textSplit[$getVar[botOwners;bot];/]
$let[error;$get[error]]
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
$deletecommand
`
	},
	{
		name: "djsEval",
		cmdName: "djsEval",
		aliases: ["dev", "djsEv", "deval"],
		cmdAliases: "dev, djsEv, deval",
		category: "Owner",
		description: "evals command/message with js and djs",
		cooldown: "none",
		example: "<Prefix>djsEval message.author.id",
		usage: "<Prefix>djsEval <code>",
		perms: "none",
		code: `
$djsEval[try {
$message
} catch (err) {
channel.send("**Source Error:**\`\`\`js\n" + err + "\`\`\`")
};yes]

$argsCheck[>0;{newEmbed:{author:║ Wrong Arguments Given!:$authorAvatar}{field:<a:errors_args:903510494751649852> $toLocaleUppercase[$get[name]]'s Usage#COLON#:\`\`\`js
Aliases: #RIGHT#$get[alias]#LEFT#\n~> $get[usage]\n~> $get[example]\`\`\`}{footer:$get[params]}{color:$get[clr2]}}]
$onlyForIDs[$joinSplitText[;];]
$textSplit[$getVar[botOwners;bot];/]
$let[error;$get[error]]
$let[check;✅]
$let[alias;$commandInfo[$commandName;cmdAliases]]
$let[category;$commandInfo[$commandName;category]]
$let[desc;$commandInfo[$commandName;description]]
$let[cd;$commandInfo[$commandName;cooldown]]
$let[perms;$commandInfo[$commandName;perms]]
$let[name;$commandInfo[$commandName;cmdName]]
$let[usage;$replaceText[$commandInfo[$commandName;usage];<Prefix>;$get[prefix]]]
$let[example;$replaceText[$commandInfo[$commandName;example];<Prefix>;$get[prefix]]]
$let[prefix;$getServerVar[prefix;$guildID;server]]
$deletecommand
`
	}
];
