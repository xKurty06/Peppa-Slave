module.exports = {
	name: "test",
	$if: "old",
	code: `

$if[yes==yes]
$addTimestamp
$color[123456]
$footer[$userTag;$userAvatar]
$addField[__Category__;\` test \`;true]
$addField[__Cooldown__;\` test \`;true]
$addField[__Perms__;\` none \`;true]
$description[__**Description**__:\`\`\`bash
$get[desc&]\`\`\`
__**Usage:**__\`\`\`js
Aliases: #RIGHT#$get[alias&]#LEFT#

$get[usage&]\`\`\`
__**Example:**__\`\`\`js
$get[example&]\`\`\`]
$author[║ Command Info | Testing;$userAvatar[$clientID]]
$reply[$messageID;false]
$endif

$argsCheck[>0;{newEmbed:{field:$get[error] Command's Usage#COLON#:\`\`\`js
Aliases: #RIGHT#$get[alias&]#LEFT#\n~> Usage:\n$get[usage&]\n\n~> Example:\n$get[example&]\`\`\`}{footer:$get[params]}{color:$get[clr2]}}]

$let[arrow;<a#COLON#peppapigshoppe_arrow#COLON#1059035766115815466>]
$let[error;❌]
$let[check;✅]
$let[clr2;$getGuildVar[clr2;$guildID;server]]
$let[clr;$getGuildVar[clr;$guildID;server]]
$let[desc&;test desc]
$let[example&;test jas;dele;analve]
$let[alias&;test, test2, test3]
$let[params;< > = Required, \( \) = Optional, #RIGHT#a | b | c#LEFT# = Choices]
    `
};

// $nomention
// $if[$getVar[Down]>=1]
// $title[WildMemers's maintance]
// $description[<a:DD_Cross:1037050237426090077> | **Sorry for this but Wild Memer is under maintance! Max wait time will be <t:$sum[$getTimestamp;44000]:R>.If we fix the problem,we will announce it in WildCard's Support Server!**]
// $addTimestamp
// $removeButtons
// $addTimestamp
// $else
// $nomention
// $enableDecimals[true]

//  $var[value;$getVar[Xp;$findUser[$message[1]]]]
//  $var[max_value;100]

//  $var[blank;<:emoji_59:1053596290451247124>]
//  $var[filled;<:emoji_62:1053596426053095444>]
//  $var[bar_length;10]

//  $var[percent;$calculate[($var[value]*100)/$var[max_value]]]
//  $var[bar;$replaceText[$repeatMessage[$var[bar_length];$var[blank]];$var[blank];$var[filled];$round[$divide[$multi[$var[percent];$var[bar_length]];100]]]]
//  $var[amount;$sum[$multi[$getVar[banknote;$mentioned[1;true]];30000];$multi[$getVar[pickaxe;$mentioned[1;true]];25000];$multi[$getVar[orb;$mentioned[1;true]];40000];$multi[$getVar[revolver;$mentioned[1;true]];60000];$multi[$getVar[sword;$mentioned[1;true]];90000]]]

// $title[$username[$findUser[$message[1]]]'s profile!]
// $description[Networth: ♜ \`$numberSeparator[$var[amount]]\` $if[$getVar[betabadge;$findUser[$message[1]]]>=1]<:beta_tester:1057201310446927893>$endif $if[$getVar[supportdeveloper;$findUser[$message[1]]]>=1]<:developeractivo:1057285399279579146>$endif $if[$getVar[developer;$findUser[$message[1]]]>=1]<:Developer:1057285417201828040>$endif
// Level: **$numberSeparator[$getVar[Level;$findUser[$message[1]]]]**
// Expierence:
// <:emoji_60:1053596354510864395>$var[bar]<:emoji_61:1053596396642639882> $round[$var[percent]]/100 ($round[$var[percent]]%)

// Showcase:]
// $addTimestamp
// $setVar[Xp;$sum[$getVar[Xp;$authorID];$random[1;5]];$authorID]
// $endif
