module.exports = {
	name: "prefix",
	cmdName: "setprefix",
	aliases: ["setprefix", "prefixset"],
	cmdAliases: "prefixset, prefix",
	usage: "<Prefix>setprefix <prefix>",
	cooldown: "3s",
	category: "Admin",
	example: "<Prefix>setprefix p!\n<Prefix>setprefix p?",
	perms: "Manage Server",
	description: "Lets you to change my prefix for this server.",
	code: `
$setServerVar[prefix;$message;$guildID;server]
$addTimestamp
$reply[$messageID;no]
$color[$get[clr]]
$footer[$userTag]
$author[║ Changed the prefix for this server to: $message;$userAvatar]
$setServerVar[prefix;$message;$guildID;server]

$argsCheck[1;{newEmbed:{description:$get[error] | Oops, you included some *space*, your Prefix should be no *space*. }{color:$get[clr2]}}]
$onlyIf[$checkCondition[$charCount[$message]<6]==true;{newEmbed:{description:$get[error] | Too long, your prefix must be \` 5 \` or below characters only and no spaces!}{color:$get[clr2]}}]
$onlyPerms[manageguild;{newEmbed:{description:$get[error] | You don't have enough permissions <\` $get[perms] \`> to use this command.}{color:$get[clr2]}}]
$reply[$messageID;no]
$argsCheck[>0;{newEmbed:{author:║ Wrong Arguments Given!:$userAvatar}{field:$get[aerror] Command's Usage#COLON#:\`\`\`js
Aliases: #RIGHT#$get[alias]#LEFT#\n~> $get[usage]\n~> $get[example]\`\`\`}{footer:$get[params]}{color:$get[clr2]}}]
$cooldown[$get[cd];{newEmbed:{description:$get[error] | Hey! Slow down, you have to wait until \` %sec%.%ms%s \` before running this command again.}{color:$get[clr2]}}]

$let[error;<#COLON#error_args#COLON#896607451049263104>]
$let[check;<#COLON#correct_args#COLON#1047049022319382608]
$let[aerror;<a#COLON#errors_args#COLON#903510494751649852>]
$let[acheck;<a#COLON#check_args#COLON#1047047101114224660>]
$let[clr2;$getServerVar[clr2;$guildID;server]]
$let[clr;$getServerVar[clr;$guildID;server]]
$let[params;<X> = Required, \(X\) = Optional, #RIGHT#A | B | C#LEFT# = Options]
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
