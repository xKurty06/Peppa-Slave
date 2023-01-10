module.exports = [
	{
		type: "channelCreate",
		channel: " ",
		code: `
$channelSendMessage[$get[channelID];{
    "content": "<@886620575735373825>",
    "embeds": "{newEmbed:{title:<#COLON#peppapigshoppe_happypeppa#COLON#1060268959724740720> Hello Shopper!}{description:> $get[arrow] | Want to order or report now? Click the Green Button below to make an <:peppapigshoppe:1057625427029540904>Order Form and Red Button for the <:peppapigshoppe_report:1061638968195690577>Report Form!\\n\\n> 📌 | If the bot is offline, please send the format manually from <#1059307766684073984> channel.}{color:$get[clr]}}",
    "components": "{actionRow:{button:Order here:success:orderForm:no:<:peppapigshoppe:1057625427029540904>}{button:Nitro:danger:nitroReportForm:no:<:peppapigshoppe_report:1061638968195690577>}{button:Premium Acc:danger:premReportForm:no:<:peppapigshoppe_report:1061638968195690577>}}"
}]

$wait[1s]

$onlyIf[$isNumber[$splitText[2]]==true;]
$onlyIf[$splitText[1]==ticket;]
$textSplit[$newChannel[name];-]
$onlyIf[$channelCategoryID[$get[channelID]]==$get[ticketCatID];]
$onlyIf[$checkContains[$get[channelType];text]==true;]
$onlyIf[$get[status]==enabled;]

$let[channelType;$channelType[$get[channelID]]]
$let[ticketCatID;$getServerVar[ticketHelper;$guildID;server]]
$let[status;$getServerVar[ticketStatus;$guildID;server]]
$let[channelID;$newChannel[id]]
$let[arrow;<a#COLON#peppapigshoppe_arrow#COLON#1059035766115815466>]
$let[error;❌]
$let[check;✅]
$let[clr2;$getServerVar[clr2;$guildID;server]]
$let[clr;$getServerVar[clr;$guildID;server]]
$let[prefix;$getServerVar[prefix;$guildID;server]]
`
	},
	{
		name: "orderForm",
		prototype: "button",
		type: "interaction",
		code: `
$interactionModal[Fill the order form: 1/1;orderForm1;
    {actionRow:
      {textInput:⤿ Name of Item/s:2:orderForm_item:yes:e.g#COLON# 1month Nitro Boost/1k Robux/Netflix Prem/...etc.:1:1000}
    }
    {actionRow:
      {textInput:⤿ Quantity:1:orderForm_quantity:yes:e.g#COLON# 1pc/2pcs/5pcs/10pcs:1:100}
    }
    {actionRow:
      {textInput:⤿ Mode of Payment:1:orderForm_payment:yes:e.g#COLON# GCash/Paypal:1:100}
    }
  ]
$let[arrow;<a#COLON#peppapigshoppe_arrow#COLON#1059035766115815466>]
$let[error;❌]
$let[check;✅]
$let[clr2;$getServerVar[clr2;$guildID;server]]
$let[clr;$getServerVar[clr;$guildID;server]]
$let[prefix;$getServerVar[prefix;$guildID;server]]
`
	},
	{
		name: "premReportForm",
		prototype: "button",
		type: "interaction",
		code: `
$interactionModal[Fill the report form: 1/2;premReportForm1;
    {actionRow:
      {textInput:⤿ Premium Item/s Purchased & Subscription/s:1:premReportForm_item-sub:yes:e.g#COLON# 1year Netflix/ 3months Spotify Premium/ 1month Youtube Premium/...etc.:1:1000}
    }
    {actionRow:
      {textInput:⤿ Item's Email & Pass. (separate w/ comma","):1:premReportForm_email-pass:yes:e.g#COLON# thsIsMyEmail0123@gmail.com, MyPassword123:1:100}
    }
    {actionRow:
      {textInput:⤿ Type of Item/s:1:premReportForm_typeOfItem:yes:e.g#COLON# Shared/Solo/Family Head:1:50}
    }
    {actionRow:
      {textInput:⤿ Replacement Email:1:premReportForm_repEmail:yes:e.g#COLON# myReplacementEmail@gmail.com:1:50}
    }
    {actionRow:
      {textInput:⤿ Date of Purchase:1:premReportForm_datePurchase:yes:e.g#COLON# day/month/year:1:100}
    }
    
  ]
$let[arrow;<a#COLON#peppapigshoppe_arrow#COLON#1059035766115815466>]
$let[error;❌]
$let[check;✅]
$let[clr2;$getServerVar[clr2;$guildID;server]]
$let[clr;$getServerVar[clr;$guildID;server]]
$let[prefix;$getServerVar[prefix;$guildID;server]]
`
	},
	{
		name: "premReportForm1",
		prototype: "modal",
		type: "interaction",
		code: `
$interactionReply[;<@$authorID>{newEmbed:{title:$get[arrow] | Please proceed to the next step: 2/2}{color:$get[clr]}};{actionRow:{button:Step 2/2:success:premReportForm_step2-$authorID:no:}}]
$setChannelVar[datePurchase;$get[datePurchase];$channelID;chnnls]
$setChannelVar[repEmail;$get[repEmail];$channelID;chnnls]
$setChannelVar[typeItem;$get[typeItem];$channelID;chnnls]
$setChannelVar[emailPass;$get[emailPass];$channelID;chnnls]
$setChannelVar[itemSub;$get[itemSub];$channelID;chnnls]

$let[datePurchase;$textInputValue[premReportForm_datePurchase]]
$let[repEmail;$textInputValue[premReportForm_repEmail]]
$let[typeItem;$textInputValue[premReportForm_typeOfItem]]
$let[emailPass;$textInputValue[premReportForm_email-pass]]
$let[itemSub;$textInputValue[premReportForm_item-sub]]
$let[arrow;<a#COLON#peppapigshoppe_arrow#COLON#1059035766115815466>]
$let[error;❌]
$let[check;✅]
$let[clr2;$getServerVar[clr2;$guildID;server]]
$let[clr;$getServerVar[clr;$guildID;server]]
$let[prefix;$getServerVar[prefix;$guildID;server]]
`
	},
	{
		prototype: "button",
		type: "interaction",
		code: `
$setChannelVar[lastPremRepFormMsgID;$messageID;$channelID;chnnls]
$editMessage[$messageID;{newEmbed:{title:<a:peppapigshoppe_loading:1061990355484037120> | Processing...}{color:$get[clr]}}]
$interactionModal[Fill the report form: 2/2;premReportForm2;
    {actionRow:
      {textInput:⤿ Days/Months used:1:premReportForm_dateUsed:yes:e.g#COLON# 3days/1month used:1:50}
    }
    {actionRow:
      {textInput:⤿ Remaining Days/Months:1:premReportForm_dateLeft:yes:e.g#COLON# 28days left/11months left:1:50}
    }
    {actionRow:
      {textInput:⤿ Issue:1:premReportForm_issue:yes:e.g#COLON# Cannot open account or invalid...etc.:1:500}
    }
  ]
$onlyif[$get[authorID]==$interactionData[author.id];{
"content" : "$get[error] <@$authorID>, only \` $userTag[$get[authorID]] \` can interact with the button.",
"ephemeral" : true,
"options" : { "interaction" : true }
}]
$onlyif[$get[customId]==premReportForm_step2;]

$let[authorID;$splitText[2]]
$let[customId;$splitText[1]] 
$textSplit[$interactionData[customId];-]
$let[arrow;<a#COLON#peppapigshoppe_arrow#COLON#1059035766115815466>]
$let[error;❌]
$let[check;✅]
$let[clr2;$getServerVar[clr2;$guildID;server]]
$let[clr;$getServerVar[clr;$guildID;server]]
$let[prefix;$getServerVar[prefix;$guildID;server]]
		`
	},
	{
		name: "nitroReportForm",
		prototype: "button",
		type: "interaction",
		code: `
$interactionModal[Fill the report form: 1/1;nitroReportForm1;
    {actionRow:
      {textInput:⤿ Nitro Gift link given:1:nitroReportForm_nitroLink:yes:e.g#COLON# https#COLON#//discord.gift/abc123def456:1:50}
    }
    {actionRow:
      {textInput:⤿ Claimer Username & Tag:1:nitroReportForm_claimerUsertag:yes:e.g#COLON# claimerUsertag#1234:1:50}
    }
    {actionRow:
      {textInput:⤿ Date of purchase:1:nitroReportForm_datePurchase:yes:e.g#COLON# day/month/year:1:50}
    }
    {actionRow:
      {textInput:⤿ Remaining Days/Months:1:nitroReportForm_dateLeft:yes:e.g#COLON# 28days left/11months left:1:50}
    }
  ]
$let[arrow;<a#COLON#peppapigshoppe_arrow#COLON#1059035766115815466>]
$let[error;❌]
$let[check;✅]
$let[clr2;$getServerVar[clr2;$guildID;server]]
$let[clr;$getServerVar[clr;$guildID;server]]
$let[prefix;$getServerVar[prefix;$guildID;server]]
`
	},
	{
		name: "orderForm1",
		prototype: "modal",
		type: "interaction",
		code: `
$color[$get[clr]]
$description[\`\`\`fix
~> 09076080723
~> GL P.
~> Always include payment receipt.
~> No rush orders. We're doing all we can to get you your item/s as soon as possible.\`\`\`]
$thumbnail[https://cdn.discordapp.com/attachments/1057866510997139477/1058049552906727516/IMG_4416.png]
$wait[2s]
$channelSendMessage[$channelID;<@$authorID>{newEmbed:{title:$get[arrow] | Always remember to send the screenshot of your payment receipt.}{color:$get[clr]}}]

$onlyIf[$checkContains[$toLowercase[$get[payment]];gcash]==true;<@$authorID>{newEmbed:{title:$get[arrow] | Always remember to send the screenshot of your payment receipt.}{color:$get[clr]}}]

$interactionReply[;{newEmbed:{author:$userTag:$authorAvatar}{title:<:peppapigshoppe:1057625427029540904> | Order Form Submitted!}{fields:$get[arrow] Name of Item/s#COLON#,\` $get[item] \`,no:$get[arrow] Quantity#COLON#,\` $get[quantity] \`,yes:$get[arrow] Mode of payment#COLON#,\` $get[payment] \`,yes}{footer:Thank you for submitting an order form, please wait for @yskaela#2022 to process it shortly.}{color:$get[clr]}}]
$let[payment;$textInputValue[orderForm_payment]]
$let[quantity;$textInputValue[orderForm_quantity]]
$let[item;$textInputValue[orderForm_item]]
$let[arrow;<a#COLON#peppapigshoppe_arrow#COLON#1059035766115815466>]
$let[error;❌]
$let[check;✅]
$let[clr2;$getServerVar[clr2;$guildID;server]]
$let[clr;$getServerVar[clr;$guildID;server]]
$let[prefix;$getServerVar[prefix;$guildID;server]]
	`
	},
	{
		name: "nitroReportForm1",
		prototype: "modal",
		type: "interaction",
		code: `
$channelSendMessage[$channelID;<@$authorID>{newEmbed:{description:> $get[arrow] **Always remember to send the screenshot of revoke email (Check your gmail account) and the screenshot/link message of your vouch in <#1057338851359735828>.**}{color:$get[clr]}}]
$wait[1s]
$interactionReply[;{newEmbed:{author:$userTag:$authorAvatar}{title:<:peppapigshoppe_report:1061638968195690577> | Nitro Report Form Submitted!}{fields:$get[arrow] Discord User & Tag#COLON#,\` $userTag \`,no:$get[arrow] Nitro Gift link given#COLON#,\` $get[nitroLink] \`,no:$get[arrow] Claimer Usertag#COLON#,\` $get[claimer] \`,yes:$get[arrow] Date of purchase#COLON#,\` $get[datePurchase] \`,yes:$get[arrow] Remaining Days/Months#COLON#,\` $get[dateLeft] \`,yes}{footer:Thank you for submitting report form, please wait for @yskaela#2022 to process it shortly.}{color:$get[clr]}}]

$let[dateLeft;$textInputValue[nitroReportForm_dateLeft]]
$let[datePurchase;$textInputValue[nitroReportForm_datePurchase]]
$let[claimer;$textInputValue[nitroReportForm_claimerUsertag]]
$let[nitroLink;$textInputValue[nitroReportForm_nitroLink]]
$let[arrow;<a#COLON#peppapigshoppe_arrow#COLON#1059035766115815466>]
$let[error;❌]
$let[check;✅]
$let[clr2;$getServerVar[clr2;$guildID;server]]
$let[clr;$getServerVar[clr;$guildID;server]]
$let[prefix;$getServerVar[prefix;$guildID;server]]
 `
	},
	{
		name: "premReportForm2",
		prototype: "modal",
		type: "interaction",
		code: `
$channelSendMessage[$channelID;<@$authorID>{newEmbed:{description:> $get[arrow] **Always remember to send the screenshot of the issue and the screenshot/link message of your vouch in <#1057338851359735828>.**}{color:$get[clr]}}]
$wait[1s]
$interactionUpdate[;{newEmbed:{author:$userTag:$authorAvatar}{title:<:peppapigshoppe_report:1061638968195690577> | Premium Acc Form Submitted!}{fields:$get[arrow] Discord User & Tag#COLON#,\` $userTag \`,no:$get[arrow] Premium Item/s Purchased & Subscription/s#COLON#,\` $get[itemSub] \`,no:$get[arrow] Item's Email & Password#COLON#,\` $get[emailPass] \`,no:$get[arrow] Type of Item/s#COLON#,\` $get[typeItem] \`,no:$get[arrow] Replacement Email#COLON#,\` $get[repEmail] \`,no:$get[arrow] Date of Purchase#COLON#,\` $get[datePurchase] \`,no:$get[arrow] Date Reported#COLON#,\` $get[dateNow] \`,no:$get[arrow] Days/Months Used#COLON#,\` $get[dateUsed] \`,no:$get[arrow] Remaining Days/Months#COLON#,\` $get[dateLeft] \`,no:$get[arrow] Issue#COLON#,\` $get[issue] \`,no}{footer:Thank you for submitting report form, please wait for @yskaela#2022 to process it shortly.}{color:$get[clr]}}]

$let[dateNow;$formatDate[$dateStamp;dddd, DD MMMM YYYY], $hour:$minute:$second]
$timezone[Asia/Manila]
$let[issue;$textInputValue[premReportForm_issue]]
$let[dateLeft;$textInputValue[premReportForm_dateLeft]]
$let[dateUsed;$textInputValue[premReportForm_dateUsed]]

$let[datePurchase;$getChannelVar[datePurchase;$channelID;chnnls]]
$let[repEmail;$getChannelVar[repEmail;$channelID;chnnls]]
$let[typeItem;$getChannelVar[typeItem;$channelID;chnnls]]
$let[emailPass;$getChannelVar[emailPass;$channelID;chnnls]]
$let[itemSub;$getChannelVar[itemSub;$channelID;chnnls]]

$let[arrow;<a#COLON#peppapigshoppe_arrow#COLON#1059035766115815466>]
$let[error;❌]
$let[check;✅]
$let[clr2;$getServerVar[clr2;$guildID;server]]
$let[clr;$getServerVar[clr;$guildID;server]]
$let[prefix;$getServerVar[prefix;$guildID;server]]
 `
	}
];
