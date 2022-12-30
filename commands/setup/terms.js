module.exports = {
	name: "terms",
	cmdName: "terms",
	aliases: [],
	cmdAliases: "none",
	description: "Terms and Conditions",
	example: "<Prefix>terms",
	category: "Setup",
	cooldown: "3s",
	usage: "<Prefix>terms",
	perms: "Admin",
	code: `
$color[$get[clr]]
$title[・──── __*T E R M S ឵឵឵឵ ឵឵឵឵ ឵឵឵឵A N D ឵឵឵឵ ឵឵឵឵ ឵឵឵឵C O N D I T I O N S*__ ────・]
$description[ ឵឵឵឵
 ឵឵឵឵
・─  **NO REFUND POLICY**
> Once the nitro link has been claimed or the payment has been made, the buyers' payment is non-refundable.

・─  **VOID WARRANTY**
> Only when there is no vouch within 24 hours, when reporting to my dms without creating a report ticket, and when reporting outside of the report window does the warranty become void.

・─  **LEAVING THE SERVER**
> Those who leave the server after purchasing nitro and fail to vouch within 24 hours will have no warranty if their nitro is revoked.

・─  **REVOKED NITROS**
> The revoked nitros will be replaced, refunded, or not at all depending on the rules of the supplier of the given nitro gift link. REMEMBER, THIS IS A BLACK MARKET.

・─  **ADDITIONAL**\`\`\`
~> 20 days is considered as 1 month.
~> 1 to 5 days remaining days is considered as 1 month.
~> Nitro with only have 16 remaining days and above will only be given a replacement if revoked depending on the supplier of the given nitro gift link.
~> No Vouch = No Warranty
~> Rush Buyers & Orders = Void Warranty
~> Rude Buyers = Void Warranty, Auto Ban\`\`\`]
$image[https://cdn.discordapp.com/attachments/1057866510997139477/1058061963655135242/server_termsandconditions.png]
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
