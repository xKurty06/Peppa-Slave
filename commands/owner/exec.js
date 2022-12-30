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
$deletecommand
$addTimestamp[1]
$color[1;$get[clr]]
$footer[1;$userTag]
$author[1;║ Terminal/Shell;$authorAvatar]
$addField[1;<:output:937755816637915196> Output:;\`\`\`js
$get[a]\`\`\`;no]
$let[a;$exec[$message]]

$addCmdReactions[✅]
$argsCheck[>0;{newEmbed:{author:║ Wrong Arguments Given!:$authorAvatar}{field:$get[error] Command's Usage#COLON#:\`\`\`js
Aliases: #RIGHT#$get[alias]#LEFT#\n~> $get[usage]\n~> $get[example]\`\`\`}{footer:$get[params]}{footer:$get[params]}{color:$get[clr2]}}]
$onlyForIDs[$joinSplitText[;];]
$textSplit[$getVar[botOwners;bot];/]
$let[error;$get[error]]
$let[check;✅]
$let[clr2;$getServerVar[clr2;;server]]
$let[clr;$getServerVar[clr;;server]]
$let[params;<X> = Required, \(X?\) = Optional, #RIGHT#A | B | C#LEFT# = Options]
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
