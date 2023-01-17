module.exports = {
	name: "exec",
	cmdName: "exec",
	aliases: ["terminal", "execute", "shell"],
	cmdAliases: "terminal, execute, shell",
	description: "Executes your 'command' inside the shell or terminal.",
	example: "<Prefix>exec npm install discord.js\n<Prefix>exec node index.js",
	category: "Owner",
	cooldown: "none",
	usage: "<Prefix>exec <command>",
	perms: "none",
	code: `
$addTimestamp[1]
$color[1;$get[clr]]
$footer[1;$userTag]
$author[1;║ Terminal/Shell;$userAvatar]
$addField[1;<:output:937755816637915196> Output:;\`\`\`js
$get[a]\`\`\`;no]
$let[a;$exec[$message]]
$deletecommand

$argsCheck[>0;{newEmbed:{author:║ Wrong Arguments Given!:$userAvatar}{field:$get[error] Command's Usage#COLON#:\`\`\`js
Aliases: #RIGHT#$get[alias]#LEFT#\n~> Usage:\n$get[usage]\n\n~> Example:\n$get[example]\`\`\`}{footer:$get[params]}{color:$get[clr2]}}]
$onlyForIDs[$joinSplitText[;];]
$textSplit[$getVar[botOwners;bot];/]

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
