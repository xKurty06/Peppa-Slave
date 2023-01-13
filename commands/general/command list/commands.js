module.exports = {
	name: "commands",
	cmdName: "commands",
	aliases: ["command", "cmdInfo", "cmd"],
	cmdAliases: "command, cmdInfo, cmd",
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
$footer[$userTag;$authorAvatar]
$addButton[1;🗑;4;deleteEmbed;no;]
$addButton[1;⚠️;2;button_cmd_admin_$authorID;no;]
$addButton[1;⚙️;2;button_cmd_setup_$authorID;no;]
$addButton[1;🐷;1;button_cmd_general_$authorID;no;]
$addButton[1;🏠;1;button_cmd_menu_$authorID;no;]
$description[> $get[arrow] Choose a module by clicking the corresponding emojis in a button below.

🐷 = General | ⚙️ = Setup | ⚠️ = Admin | 🗑 = Delete embed | 🏠 = Back to menu]
$author[║ Command Info | Module;$serverIcon]
$reply[$messageID;no]

$else

$if[$get[perms&]==none]
$addTimestamp
$color[$get[clr]]
$footer[$userTag;$authorAvatar]
$addField[__Category__;\` $get[category&] \`;yes]
$addField[__Cooldown__;\` $get[cd&] \`;yes]
$addField[__Perms__;\` $get[perms&] \`;yes]
$description[__**Description**__:\`\`\`bash
$get[desc&]\`\`\`
__**Usage:**__\`\`\`js
Aliases: #RIGHT#$get[alias&]#LEFT#

$get[usage&]\`\`\`
__**Example:**__\`\`\`js
$get[example&]\`\`\`]
$author[║ Command Info | $get[name&];$serverIcon]
$reply[$messageID;no]

$else

$addTimestamp
$color[$get[clr]]
$footer[$userTag;$authorAvatar]
$addField[__Category__;\` $get[category&] \`;yes]
$addField[__Cooldown__;\` $get[cd&] \`;yes]
$addField[__Perms__;\` $get[perms&] \`;yes]
$description[__**Description**__:\`\`\`bash
$get[desc&]\`\`\`
__**Usage:**__\`\`\`js
Aliases: #RIGHT#$get[alias&]#LEFT#

$get[usage&]\`\`\`
__**Example:**__\`\`\`js
$get[example&]\`\`\`]
$author[║ Command Info | $get[name&];$serverIcon]
$reply[$messageID;no]


$if[$toLowercase[$message]==module||$toLowercase[$message]==modules]
$let[lala;la]
$else
$onlyIf[$checkContains[$userPerms;$get[uperms]]==true;{newEmbed:{author:║ Excluded Commands!:$authorAvatar}{description:> $get[error] | The command requires the \` $get[perms&] \` permission.}{color:$get[clr2]}}]

$onlyIf[$get[category&]!=Owner;{newEmbed:{author:║ Excluded Commands!:$authorAvatar}{description:> $get[error] | The command is not included in the command list and is only for bot developer.}{color:$get[clr2]}}]
$let[uperms;$replaceText[$toLowercase[$get[perms&]]; ;]]
$endif

$onlyIf[$get[name&]!=;{newEmbed:{author:║ Not Found!:$authorAvatar}{description:> $get[error] | The command/module \` $message \` doesn't even exists!}{color:$get[clr2]}}]

$let[alias&;$commandInfo[$message;cmdAliases]]
$let[category&;$commandInfo[$message;category]]
$let[desc&;$commandInfo[$message;description]]
$let[cd&;$commandInfo[$message;cooldown]]
$let[perms&;$commandInfo[$message;perms]]
$let[name&;$commandInfo[$message;cmdName]]
$let[usage&;$replaceText[$commandInfo[$message;usage];<Prefix>;$get[prefix]]]
$let[example&;$replaceText[$commandInfo[$message;example];<Prefix>;$get[prefix]]]
$endif
$endif

$argsCheck[>0;{newEmbed:{author:║ Wrong Arguments Given!:$authorAvatar}{field:$get[error] Command's Usage#COLON#:\`\`\`js
Aliases: #RIGHT#$get[alias]#LEFT#\n~> Usage:\n$get[usage]\n\n~> Example:\n$get[example]\`\`\`}{footer:$get[params]}{color:$get[clr2]}}]
$cooldown[$get[cd];{newEmbed:{description:$get[error] | Hey! Slow down, you have to wait until \` %sec%.%ms%s \` before running this command again.}{color:$get[clr2]}}]

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
