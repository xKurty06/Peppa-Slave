module.exports = {
	name: "commands",
	cmdName: "commands",
	aliases: ["command", "cmdInfo", "help", "cmd"],
	cmdAliases: "command, cmdInfo, help, cmd",
	description: "Returns all the bot's commands",
	example: "<Prefix>commands setprefix\n<Prefix>commands module",
	category: "General",
	cooldown: "3s",
	usage: "<Prefix>commands [command name | module]",
	perms: "",
	$if: "old",
	code: `
$if[$toLowercase[$message]==module||$toLowercase[$message]==modules]
$addTimestamp
$color[$get[clr]]
$footer[$userTag;$userAvatar]
$addButton[1;🗑;4;deleteEmbed;false;]
$addButton[1;⚠️;2;button_cmd_admin_$authorID;false;]
$addButton[1;⚙️;2;button_cmd_setup_$authorID;false;]
$addButton[1;🐷;1;button_cmd_general_$authorID;false;]
$addButton[1;🏠;1;button_cmd_menu_$authorID;false;]
$description[> $get[arrow] Choose a module by clicking the corresponding emojis in a button below.

🐷 = General | ⚙️ = Setup | ⚠️ = Admin | 🗑 = Delete embed | 🏠 = Back to menu]
$author[║ Command Info | Module;$userAvatar[$clientID]]
$reply[$messageID;false]

$else

$addButton[1;Delete;danger;deleteEmbed;false;🗑]
$addTimestamp
$color[$get[clr]]
$footer[$userTag;$userAvatar]
$addField[__Category__;\` $get[category&] \`;true]
$addField[__Cooldown__;\` $get[cd&] \`;true]
$addField[__Perms__;\` $get[perms&] \`;true]
$description[__**Description**__:\`\`\`bash
$get[desc&]\`\`\`
__**Usage:**__\`\`\`js
Aliases: #RIGHT#$get[alias&]#LEFT#

$get[usage&]\`\`\`
__**Example:**__\`\`\`js
$get[example&]\`\`\`]
$author[║ Command Info | $get[name&];$userAvatar[$clientID]]
$reply[$messageID;false]

$onlyIf[$get[category&]!=Owner;{newEmbed:{author:║ Excluded Commands!:$userAvatar}{description:> $get[error] | The command is excluded from the command list and is only for bot developer.}{color:$get[clr2]}}]

$onlyIf[$get[name&]!=;{newEmbed:{author:║ Not Found!:$userAvatar}{description:> $get[error] | The command/module \` $message \` doesn't even exists!}{color:$get[clr2]}}]

$let[uperms;$replaceText[$toLowercase[$get[perms&]]; ;]]
$let[alias&;$commandInfo[$message;cmdAliases]]
$let[category&;$commandInfo[$message;category]]
$let[desc&;$commandInfo[$message;description]]
$let[cd&;$commandInfo[$message;cooldown]]
$let[perms&;$commandInfo[$message;perms]]
$let[name&;$commandInfo[$message;cmdName]]
$let[usage&;$replaceText[$commandInfo[$message;usage];<Prefix>;$get[prefix]]]
$let[example&;$replaceText[$commandInfo[$message;example];<Prefix>;$get[prefix]]]
$endif

$argsCheck[>0;{newEmbed:{author:║ Wrong Arguments Given!:$userAvatar}{field:$get[error] Command's Usage#COLON#:\`\`\`js
Aliases: #RIGHT#$get[alias]#LEFT#\n~> Usage:\n$get[usage]\n\n~> Example:\n$get[example]\`\`\`}{footer:$get[params]}{color:$get[clr2]}}]
$cooldown[$get[cd];{newEmbed:{description:$get[error] | Hey! Slow down, you have to wait until \` %sec%.%ms%s \` before running this command again.}{color:$get[clr2]}}]

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
