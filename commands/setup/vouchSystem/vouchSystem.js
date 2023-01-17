module.exports = {
	name: "$alwaysExecute",
	code: `
<:peppapig:1057625427029540904> ***Thank you for vouching! your warranty has been activated.*** <:peppapig:1057625427029540904>
$reply[$messageID;yes]

$onlyIf[$get[attch]!=;{newEmbed:{title:$get[error] | Wrong format given!}{description:*Please provide a screenshot of your purchase!*}{color:$get[clr2]}}{delete:5s}]

$onlyIf[$checkContains[$message;vouch;Vouch]==true;{newEmbed:{title:$get[error] | Wrong format given!}{description:**Proper Format:** *\` - vouch @$userTag[886620575735373825] for 1 pc of Nitro Boost, tysm! \`*}{color:$get[clr2]}}{extraOptions:{delete:3s}}{reply:{messageReference:$messageID}}]
$let[attch;$messageAttachment]
$onlyForChannels[$get[vChannel];]
$onlyIf[$serverChannelExists[$get[vChannel]]==true;]
$onlyIf[$get[vChannel]!=;]
$onlyIf[$get[status]==enabled;]
$suppressErrors

$let[vChannel;$getServerVar[vouchChannel;$guildID;server]]
$let[status;$getServerVar[vouchStatus;$guildID;server]]
$let[arrow;<a#COLON#peppapigshoppe_arrow#COLON#1059035766115815466>]
$let[error;❌]
$let[check;✅]
$let[clr2;$getServerVar[clr2;$guildID;server]]
$let[clr;$getServerVar[clr;$guildID;server]]
$let[prefix;$getServerVar[prefix;$guildID;server]]
`
};
