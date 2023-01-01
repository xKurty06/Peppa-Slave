module.exports = {
	name: "test",
	code: `
$sendMessage[Working...]

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
};

// $sendMessage[everyone{
//     newEmbed: { title:Ticket Oluşturuldu } {
//         description:: member:・** Ticket Açan **
// \[$userTag\](https://discord.com/users/$authorID)
// :time:・**Oluşturduğu Zaman**
// <t:$round[$divide[$datestamp;1000]]:F> \(<t:$round[$divide[$datestamp;1000]]:R>\)}{color:GREEN}}{actionRow:{button:Ticketi Kapat:danger:tkapat:no}}]
