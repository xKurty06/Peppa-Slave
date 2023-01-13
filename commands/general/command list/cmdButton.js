module.exports = [
	{
		type: "interaction",
		prototype: "button",
		$if: "old",
		code: `
$interactionUpdate[;{newEmbed:{author:║ Command List | $toLocaleUppercase[$get[customID]]:$serverIcon}{description:\`\`\`js\n$get[result]\`\`\`}{color:$get[clr]}{footer:$get[params]:$authorAvatar}};{actionRow:{button:🏠:1:button_cmd_menu_$authorID:no}{button:🐷:1:button_cmd_general_$authorID:no}
{button:⚙️:2:button_cmd_setup_$authorID:no}
{button:⚠️:2:button_cmd_admin_$authorID:no}
{button:🗑:4:deleteEmbed:no}}]

$onlyIf[$get[authorID]==$interactionData[author.id];{
    "content": "> $get[error] <@$interactionData[author.id]>, only \` $userTag[$get[authorID]] \` can interact with those buttons!",
    "ephemeral": true,
    "options": {"interaction": true}
}]

$let[result;$getObjectProperty[$get[customID]]]
$createObject[$get[text]]
$let[text;$readFile[./src/cmdList.json]]
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

$onlyIf[$checkContains[$get[customID];admin;general;setup]==true;]
$onlyIf[$get[id2]==cmd;]
$onlyIf[$get[id1]==button;]

$let[id2;$splitText[2]]
$let[id1;$splitText[1]]
$let[authorID;$splitText[4]]
$let[customID;$splitText[3]]
$textSplit[$interactionData[customId];_]
`
	},
	{
		type: "interaction",
		prototype: "button",
		$if: "old",
		code: `
$interactionUpdate[;{newEmbed:{description:> $get[arrow] Choose a module by clicking the corresponding emojis in a button below.

🐷 = General | ⚙️ = Setup | ⚠️ = Admin | 🗑 = Delete embed | 🏠 = Back to menu}{author:║ Command Info | Module:$serverIcon}{footer:$userTag:$authorAvatar}{color:$get[clr]}{timestamp:ms}};{actionRow:{button:🏠:1:button_cmd_menu_$authorID:no}{button:🐷:1:button_cmd_general_$authorID:no}
{button:⚙️:2:button_cmd_setup_$authorID:no}
{button:⚠️:2:button_cmd_admin_$authorID:no}
{button:🗑:4:deleteEmbed:no}}]

$onlyIf[$get[authorID]==$interactionData[author.id];{
    "content": "> $get[error] <@$interactionData[author.id]>, only \` $userTag[$get[authorID]] \` can interact with those buttons!",
    "ephemeral": true,
    "options": {"interaction": true}
}]

$let[result;$getObjectProperty[$get[customID]]]
$createObject[$get[text]]
$let[text;$readFile[./src/cmdList.json]]
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

$onlyIf[$checkContains[$get[customID];menu]==true;]
$onlyIf[$get[id2]==cmd;]
$onlyIf[$get[id1]==button;]

$let[id2;$splitText[2]]
$let[id1;$splitText[1]]
$let[authorID;$splitText[4]]
$let[customID;$splitText[3]]
$textSplit[$interactionData[customId];_]
`
	}
];
