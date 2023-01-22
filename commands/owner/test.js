module.exports = {
	name: "test",
	$if: "old",
	code: `

$if[yes==yes]
$addTimestamp
$color[123456]
$footer[$userTag;$userAvatar]
$addField[__Category__;\` test \`;yes]
$addField[__Cooldown__;\` test \`;yes]
$addField[__Perms__;\` none \`;yes]
$description[__**Description**__:\`\`\`bash
$get[desc&]\`\`\`
__**Usage:**__\`\`\`js
Aliases: #RIGHT#$get[alias&]#LEFT#

$get[usage&]\`\`\`
__**Example:**__\`\`\`js
$get[example&]\`\`\`]
$author[║ Command Info | Testing;$userAvatar[$clientID]]
$reply[$messageID;no]
$endif

$argsCheck[>0;{newEmbed:{field:$get[error] Command's Usage#COLON#:\`\`\`js
Aliases: #RIGHT#$get[alias&]#LEFT#\n~> Usage:\n$get[usage&]\n\n~> Example:\n$get[example&]\`\`\`}{footer:$get[params]}{color:$get[clr2]}}]

$let[arrow;<a#COLON#peppapigshoppe_arrow#COLON#1059035766115815466>]
$let[error;❌]
$let[check;✅]
$let[clr2;$getServerVar[clr2;$guildID;server]]
$let[clr;$getServerVar[clr;$guildID;server]]
$let[desc&;test desc]
$let[example&;test jas;dele;analve]
$let[alias&;test, test2, test3]
$let[params;< > = Required, \( \) = Optional, #RIGHT#a | b | c#LEFT# = Choices]
    `
};
