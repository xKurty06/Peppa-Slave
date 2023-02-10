module.exports = {
	name: "$alwaysExecute",
	code: `
<:peppapig:1057625427029540904> ***Thank you for vouching! your warranty has been activated.*** <:peppapig:1057625427029540904>
$reply[$messageID;true]

$onlyIf[$get[attch]!=;<@$authorID>{newEmbed:{title:$get[error] | Wrong format given!}{description:*Please provide a screenshot of your purchase!*}{color:$get[clr2]}}{extraOptions:{delete:15s}}]

$onlyIf[$checkContains[$message;vouch;Vouch]==true;<@$authorID>{newEmbed:{title:$get[error] | Wrong format given!}{description:**Proper Format:** *\` - vouch @$userTag[886620575735373825] for 1 pc of Nitro Boost, tysm! \`*}{color:$get[clr2]}}{extraOptions:{delete:15s}}]
$let[attch;$messageAttachment]
$onlyForChannels[$get[vChannel];]
$onlyIf[$guildChannelExists[$get[vChannel]]==true;]
$onlyIf[$get[vChannel]!=;]
$onlyIf[$get[status]==enabled;]
$suppressErrors

$let[vChannel;$getGuildVar[vouchChannel;$guildID;server]]
$let[status;$getGuildVar[vouchStatus;$guildID;server]]
$let[arrow;<a#COLON#peppapigshoppe_arrow#COLON#1059035766115815466>]
$let[error;❌]
$let[check;✅]
$let[clr2;$getGuildVar[clr2;$guildID;server]]
$let[clr;$getGuildVar[clr;$guildID;server]]
$let[prefix;$getGuildVar[prefix;$guildID;server]]
`
};
