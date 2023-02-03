module.exports = [
	{
		type: "interaction",
		prototype: "button",
		name: "deleteEmbed",
		code: `
$suppressErrors
$deleteMessage[$get[id2]]
$onlyIf[$messageExists[$get[id2]]==true;]
$onlyIf[$get[id2]!=;]
$deleteMessage[$get[id]]
$wait[3s]
$interactionEdit[This message will be deleted in <t:$truncate[$divide[$sum[$dateStamp;4000];1000]]:R> seconds.;;;;all;no]
$interactionDeferUpdate[no]

$setMessageVar[deleteEmbed;true;$get[id];message]
$onlyIf[$getMessageVar[deleteEmbed;$get[id];message]==false;]
$let[id2;$getMessageVar[msg_messageID;$get[id];message]]
$let[id;$messageID]
`
	},
	{
		type: "interaction",
		prototype: "button",
		name: "deleteEmbeds",
		code: `
$suppressErrors
$deleteMessage[$get[id2]]
$onlyIf[$messageExists[$get[id2]]==true;]
$onlyIf[$get[id2]!=;]
$deleteMessage[$get[id]]
$wait[3s]
$interactionEdit[This message will be deleted in <t:$truncate[$divide[$sum[$dateStamp;4000];1000]]:R> seconds.;;;;all;no]
$interactionDeferUpdate[no]

$setMessageVar[deleteEmbed;true;$get[id];message]
$onlyIf[$getMessageVar[deleteEmbed;$get[id];message]==false;]
$onlyIf[$authorID==$get[id3];> <@$authorID>, only \` $userTag[$get[id3]] \` can interact with the buttons.{delete:2s}]
$cooldown[5s;]
$wait[2s]
$let[id3;$getMessageVar[authorMessage;$get[id];message]]
$let[id2;$getMessageVar[msg_messageID;$get[id];message]]
$let[id;$messageID]
`
	}
];
