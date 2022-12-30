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
$wait[1s]
$editMessage[$get[id];Deleting...]
$wait[1s]
$editMessage[$get[id];This message will be deleted in \` 1 \` second.]
$wait[1s]
$editMessage[$get[id];This message will be deleted in \` 2 \` seconds.]
$wait[1s]
$editMessage[$get[id];This message will be deleted in \` 3 \` seconds.]
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
$wait[1s]
$editMessage[$get[id];Deleting...]
$wait[1s]
$editMessage[$get[id];This message will be deleted in \` 1 \` second.]
$wait[1s]
$editMessage[$get[id];This message will be deleted in \` 2 \` seconds.]
$wait[1s]
$editMessage[$get[id];This message will be deleted in \` 3 \` seconds.]
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
