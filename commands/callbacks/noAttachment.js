module.exports = {
  name: "$alwaysExecute",
  code: `
<:peppapig:1057625427029540904> ***Thank you for vouching!*** <:peppapig:1057625427029540904>
$reply[$messageID;yes]

$onlyIf[$get[attch]!=;{newEmbed:{author:$get[error] | Wrong format given!}{description:*Please provide a screenshot of your purchase!*}{color:$get[clr2]}{delete:15s}}]
$onlyIf[$checkContains[$message;vouch;Vouch]==true;{newEmbed:{author:$get[error] | Wrong format given!}{description:**Proper Format:** *\` - vouch @yskaela#2022 for 1 pc of Nitro Boost, tysm! \`*}{color:$get[clr2]}{delete:15s}}]
$let[attch;$messageAttachment]
$onlyForChannels[1057338851359735828;]
$suppressErrors

$let[arrow;<#COLON#arrow2#COLON#1055144562257047702>]
$let[error;❌]
$let[check;✅]
$let[clr2;$getServerVar[clr2;$guildID;server]]
$let[clr;$getServerVar[clr;$guildID;server]]
$let[prefix;$getServerVar[prefix;$guildID;server]]
`}