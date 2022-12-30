module.exports = {
	name: "rules",
	cmdName: "rules",
	aliases: [],
	cmdAliases: "none",
	description: "Server Rules",
	example: "<Prefix>rules",
	category: "Setup",
	cooldown: "3s",
	usage: "<Prefix>rules",
	perms: "Admin",
	code: `
$color[$get[clr]]
$title[・────  __*S E R V E R ឵឵឵឵ ឵឵឵឵ ឵឵឵឵R U L E S*__  ────・]
$description[ ឵឵឵឵
 ឵឵឵឵
・─ **NO SELF & SERVER PROMOTION**
> Unless in partnership collaboration, self- and server-promotion is prohibited on the server. The shop will ban anyone who promotes their server and products to the server and its members. Don't do it to others if you don't want to do it on your server.

・─ **STRICTLY NO RUDE BUYERS**
> Please be respectful to us sellers. Since I am only a reseller, prices may fluctuate and change without notice depending on the supplier and producer.

・─ **STRICTLY, NO TO RUSH BUYERS & ORDERS**
> Every order in the ticket is noted. We'll let you know if the nitro is in stock or still being restocked. Since you chose to shop with us, you must learn how to wait.

・─ **NO MASS PINGING THROUGH TICKETS, ESPECIALLY TO DMS**
> As I previously stated, your orders have been received and are being processed. Please do not ping us multiple times in your tickets.

・─ **ALWAYS CHECK OR ASK FOR THE AVAILABILITY**
> Always inquire about the availability of the nitro or check the updates, especially for those in a hurry.

・─ **NO SENDING OF PAYMENT WITHOUT PRIOR NOTICE**
> To avoid rush orders and buyers, please do not send your payment without our prior notice or confirmation.

・─ **MAKE READING A HABIT**
> Keep up with our products by reading and checking the server for updates, announcements, chats, and other information. If you have any questions, please send them to the queries channel.

・─ **REPORTING TIME**
> I will only accept reports from 8:00 a.m. to 5:00 p.m. by creating a report ticket on the server. Anyone who reported to my dms after or before the specified report window will have their nitro warranty voided.]
$image[https://cdn.discordapp.com/attachments/1057866510997139477/1058058119609057401/server_serverrules.png]
$deletecommand

$cooldown[$get[cd];{newEmbed:{description:$get[error] | Hey! Slow down, you have to wait until \` %sec%.%ms%s \` before running this command again.}{color:$get[clr2]}}]

$onlyForIDs[$joinSplitText[;];]
$textSplit[$getVar[botOwners;bot];/]
$let[arrow;<#COLON#arrow2#COLON#1055144562257047702>]
$let[error;❌]
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
