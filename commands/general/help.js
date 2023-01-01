module.exports = {
    name: "$alwaysExecute",
    cmdName: "",
    aliases: [""],
    cmdAliases: "none",
    description: "Mention me to get help about my information or commands.",
    example: "@Peppa's Slave#9155",
    category: "general",
    cooldown: "5s",
    usage: "@mentionBot",
    perms: "none",
    code: `
$addTimestamp[]
$color[$get[clr]]
$footer[$userTag]
$author[║ My prefix;$authorAvatar]
$description[ ឵឵ ឵឵ ឵឵឵឵>> Hey **$username**!My prefix for this server is **\` $get[prefix] \`**, $if[$checkUserPerms[$authorID;manageserver]==true; you can customize it by running this command \` $get[prefix]prefix <prefix> \`]]
$reply[$messageID;no]

$cooldown[$get[cd];]
$onlyIf[$findUser[$message]==$clientID;]

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
$let[prefix;$getServerVar[prefix;$guildID;server]]`
};