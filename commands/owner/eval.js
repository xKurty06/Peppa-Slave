module.exports = [
	{
		name: "eval",
		cmdName: "eval",
		aliases: ["ev", "ev5", "aoi5", "eval5"],
		cmdAliases: "eval5, aoi5, ev5, ev",
		category: "Owner",
		description: "evals command/message with aoi.js",
		cooldown: "none",
		example: "<Prefix>eval $authorID",
		usage: "<Prefix>eval <code>",
		perms: "none",
		error: "$channelSendMessage[$channelID;```js\nError: $error```]",
		code: `
$eval[$message;false;true;true;false]
$argsCheck[>0;{newEmbed:{author:║ Wrong Arguments Given!:$userAvatar}{field:<a:errors_args:903510494751649852> Command's Usage#COLON#:\`\`\`js
Aliases: #RIGHT#$get[alias]#LEFT#\n~> $get[usage]\n~> $get[example]\`\`\`}{footer:$get[params]}{color:$get[clr2]}}]

$deletecommand
$onlyForIDs[$joinSplitText[;];]
$textSplit[$getVar[botOwners;bot];/]

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
		$if: "old",
		code: `
$eval[$message;false;true;true;false]
$argsCheck[>0;{newEmbed:{author:║ Wrong Arguments Given!:$userAvatar}{field:<a:errors_args:903510494751649852> Command's Usage#COLON#:\`\`\`js
Aliases: #RIGHT#$get[alias]#LEFT#\n~> $get[usage]\n~> $get[example]\`\`\`}{footer:$get[params]}{color:$getGuildVar[clr;$guildID;server]}}]
$onlyForIDs[$joinSplitText[;];]
$textSplit[$getVar[botOwners;bot];/]
$let[error;$get[error]]
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
channel.send("**Source Error:**\`\`\`js\\n" + err + "\`\`\`")
};false]

$argsCheck[>0;{newEmbed:{author:║ Wrong Arguments Given!:$userAvatar}{field:<a:errors_args:903510494751649852> $toLocaleUppercase[$get[name]]'s Usage#COLON#:\`\`\`js
Aliases: #RIGHT#$get[alias]#LEFT#\n~> $get[usage]\n~> $get[example]\`\`\`}{footer:$get[params]}{color:$get[clr2]}}]
$onlyForIDs[$joinSplitText[;];]
$textSplit[$getVar[botOwners;bot];/]
$let[error;❌]
$let[check;✅]
$let[alias;$commandInfo[$commandName;cmdAliases]]
$let[category;$commandInfo[$commandName;category]]
$let[desc;$commandInfo[$commandName;description]]
$let[cd;$commandInfo[$commandName;cooldown]]
$let[perms;$commandInfo[$commandName;perms]]
$let[name;$commandInfo[$commandName;cmdName]]
$let[usage;$replaceText[$commandInfo[$commandName;usage];<Prefix>;$get[prefix]]]
$let[example;$replaceText[$commandInfo[$commandName;example];<Prefix>;$get[prefix]]]
$let[prefix;$getGuildVar[prefix;$guildID;server]]
$deletecommand
`
	}
];
