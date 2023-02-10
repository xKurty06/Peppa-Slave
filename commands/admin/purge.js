module.exports = {
	name: "purge",
	cmdName: "purge",
	aliases: ["clear"],
	cmdAliases: "clear",
	description:
		"Purge a certain given amount of messages. Or clear  messages from specific user or bots.",
	example:
		"<Prefix>purge 5 unPins //Clears 5 messages that are not pinned.\n<Prefix>purge 10 all //Clears 10 messages for all users including bots.\n<Prefix>purge 15 12345678901234568 //Clears 15 messages from a specific user only. This can be an userID or mention/ping.\n<Prefix>purge 6 bot //Clears 6 messages for all bots only.",
	category: "Admin",
	cooldown: "5s",
	usage: "<Prefix>purge <amount> (unPins | all | user | bot)",
	perms: "Manage Messages",
	$if: "old",
	code: `
$get[msg2]
$if[$checkContains[$get[msg2];bot;all;unpins]]
    $if[$get[msg2]===bot]
    $addTimestamp
    $color[$get[clr]]
    $footer[$userTag]
    $description[> 🧹 Successfully cleared \` $get[result] \` messages from \` bots \` in this channel.]
    $author[║ Purge;$userAvatar]
    $let[result;$clear[$get[msg1];$authorID;true;$channelID]]
    $wait[1s]

    $elseif[$get[msg2]===all]
    $addTimestamp
    $color[$get[clr]]
    $footer[$userTag]
    $description[> 🧹 Successfully cleared \` $get[result] \` messages from \` everyone \` in this channel.]
    $author[║ Purge;$userAvatar]
    $let[result;$clear[$get[msg1];$authorID;true;$channelID]]
    $wait[1s]
    $endelseif
    
    $elseif[$get[msg2]===unpins]
    $addTimestamp
    $color[$get[clr]]
    $footer[$userTag]
    $description[> 🧹 Successfully cleared \` $get[result] \` messages from \` unpinned \` messages in this channel.]
    $author[║ Purge;$userAvatar]
    $let[result;$clear[$get[msg1];$authorID;true;$channelID]]
    $wait[1s]

    $endelseif
    $endif
$else
    $if[$get[user]!=]
    $addTimestamp
    $color[$get[clr]]
    $footer[$userTag]
    $description[> 🧹 Successfully cleared \` $get[result] \` messages from <@$get[user]> in this channel.]
    $author[║ Purge;$userAvatar]
    $let[result;$clear[$get[msg1];$authorID;true;$channelID]]
    $wait[1s]

    $else
    $addTimestamp
    $color[$get[clr]]
    $footer[$userTag]
    $description[> 🧹 Successfully cleared \` $get[result] \` messages from \` everyone1 \` in this channel.]
    $author[║ Purge;$userAvatar]
    $let[result;$clear[$get[msg1];$authorID;true;$channelID]]
    $wait[1s]

    $endif
$endif

$deletecommand
$onlyIf[$isNumber[$get[msg1]]==true;{newEmbed:{author:║ Invalid Amount:$userAvatar}{description:> $get[error] | Please provide a valid amount of messages to clear!}{color:$get[clr2]}}]
$onlyPerms[managemessages;{newEmbed:{description:$get[error] | You don't have enough permissions <\` $get[perms] \`> to use this command!}{color:$get[clr2]}}]
$argsCheck[>0;{newEmbed:{author:║ Wrong Arguments Given!:$userAvatar}{field:$get[error] Command's Usage#COLON#:\`\`\`js
Aliases: #RIGHT#$get[alias]#LEFT#\n~> Usage:\n$get[usage]\n\n~> Example:\n$get[example]\`\`\`}{footer:$get[params]}{color:$get[clr2]}}]
$cooldown[$get[cd];{newEmbed:{description:$get[error] | Hey! Slow down, you have to wait until \` %sec%.%ms%s \` before running this command again.}{color:$get[clr2]}}]

$onlyForGuilds[877873096265170994;]
$onlyForIDs[$joinSplitText[;];]
$textSplit[$getVar[botOwners;bot];/]
$let[user;$findUser[$get[msg];false]]
$let[msg2;$toLowercase[$message[2]]]
$let[msg1;$message[1]]
$let[msg;$messageSlice[1]]
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
