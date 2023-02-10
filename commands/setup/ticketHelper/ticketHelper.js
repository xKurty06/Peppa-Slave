module.exports = [
	{
		type: "channelCreate",
		channel: " ",
		$if: "old",
		code: `
$if[$channelCategoryID[$newChannel[id]]==$getGuildVar[ticketHelper;$guildID;server]]
$channelSendMessage[$channelID;<@&1057491730733207583>{newEmbed:{title:<#COLON#peppapigshoppe_happypeppa#COLON#1060268959724740720> Hello Shopper!}{description:> <a#COLON#peppapigshoppe_arrow#COLON#1059035766115815466> | Want to order or report now? Click the Green Button below to make an <:peppapigshoppe:1057625427029540904>Order Form and Red Button for the <:peppapigshoppe_report:1061638968195690577>Report Form!\n\n> 📌 | If the bot is offline, please send the format manually from <#1059307766684073984> channel.}{color:$get[clr]}}{actionRow:{button:Order here:success:orderForm:no:<#COLON#peppapigshoppe#COLON#1057625427029540904>}}]
$endif

$if[$channelCategoryID[$newChannel[id]]==$getGuildVar[ticketHelper2;$guildID;server]]
$channelSendMessage[$channelID;<@&1057491730733207583>{newEmbed:{title:<#COLON#peppapigshoppe_happypeppa#COLON#1060268959724740720> Hello Shopper!}{description:> <a#COLON#peppapigshoppe_arrow#COLON#1059035766115815466> | Want to order or report now? Click the Green Button below to make an <:peppapigshoppe:1057625427029540904>Order Form and Red Button for the <:peppapigshoppe_report:1061638968195690577>Report Form!\n\n> 📌 | If the bot is offline, please send the format manually from <#1059307766684073984> channel.}{color:$get[clr]}}{actionRow:{button:Nitro:danger:nitroReportForm:no:<#COLON#peppapigshoppe_report#COLON#1061638968195690577>}{button:Premium Acc:danger:premReportForm:no:<#COLON#peppapigshoppe_report#COLON#1061638968195690577>}}]
$endif

$wait[3s]
$onlyIf[$splitText[1]==ticket;]
$onlyIf[$get[status]==enabled;]

$textSplit[$newChannel[name];-]
$let[channelType;$channelType[$get[channelID]]]
$let[ticketCatID2;$getGuildVar[ticketHelper2;$guildID;server]]
$let[ticketCatID;$getGuildVar[ticketHelper;$guildID;server]]
$let[status;$getGuildVar[ticketStatus;$guildID;server]]
$let[channelID;$newChannel[id]]
$let[arrow;<a#COLON#peppapigshoppe_arrow#COLON#1059035766115815466>]
$let[error;❌]
$let[check;✅]
$let[clr2;$getGuildVar[clr2;$guildID;server]]
$let[clr;$getGuildVar[clr;$guildID;server]]
$let[prefix;$getGuildVar[prefix;$guildID;server]]
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
$let[clr2;$getGuildVar[clr2;$guildID;server]]
$let[clr;$getGuildVar[clr;$guildID;server]]
$let[prefix;$getGuildVar[prefix;$guildID;server]]
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
$let[clr2;$getGuildVar[clr2;$guildID;server]]
$let[clr;$getGuildVar[clr;$guildID;server]]
$let[prefix;$getGuildVar[prefix;$guildID;server]]
`
	},
	{
		name: "premReportForm1",
		prototype: "modal",
		type: "interaction",
		code: `
$interactionReply[<@$authorID>;{newEmbed:{title:$get[arrow] | Please proceed to the next step: 2/2}{color:$get[clr]}};{actionRow:{button:Step 2/2:success:premReportForm_step2:no}};;users;false]
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
$let[clr2;$getGuildVar[clr2;$guildID;server]]
$let[clr;$getGuildVar[clr;$guildID;server]]
$let[prefix;$getGuildVar[prefix;$guildID;server]]
`
	},
	{
		name: "premReportForm_step2",
		prototype: "button",
		type: "interaction",
		code: `
$setChannelVar[lastPremRepFormMsgID;$messageID;$channelID;chnnls]
$interactionEdit[<@$authorID>;{newEmbed:{title:<a:peppapigshoppe_loading:1061990355484037120> | Processing...}{color:$get[clr]}};{actionRow:{button:Step 2/2:success:premReportForm_step2:yes}};;users;false]

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

$let[arrow;<a#COLON#peppapigshoppe_arrow#COLON#1059035766115815466>]
$let[error;❌]
$let[check;✅]
$let[clr2;$getGuildVar[clr2;$guildID;server]]
$let[clr;$getGuildVar[clr;$guildID;server]]
$let[prefix;$getGuildVar[prefix;$guildID;server]]
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
$let[clr2;$getGuildVar[clr2;$guildID;server]]
$let[clr;$getGuildVar[clr;$guildID;server]]
$let[prefix;$getGuildVar[prefix;$guildID;server]]
`
	},
	{
		name: "orderForm1",
		prototype: "modal",
		type: "interaction",
		code: `
$channelSendMessage[$channelID;<@$authorID>{newEmbed:{title:<a#COLON#peppapigshoppe_arrow#COLON#1059035766115815466> | Always remember to send the screenshot of your payment receipt.}{color:$get[clr]}}]

$onlyIf[$checkContains[$toLowercase[$get[payment]];gcash]==true;<@$authorID>{newEmbed:{title:<a#COLON#peppapigshoppe_arrow#COLON#1059035766115815466> | Always remember to send the screenshot of your payment receipt.}{color:$get[clr]}}]

$interactionReply[;{newEmbed:{author:$userTag:$userAvatar}{title:<:peppapigshoppe:1057625427029540904> | Order Form Submitted!}{fields:<a#COLON#peppapigshoppe_arrow#COLON#1059035766115815466> Name of Item/s#COLON#,\` $get[item] \`,no:$get[arrow] Quantity#COLON#,\` $get[quantity] \`,yes:$get[arrow] Mode of payment#COLON#,\` $get[payment] \`,yes}{footer:Thank you for submitting an order form, please wait for @yskaela#2022 to process it shortly.:$userAvatar[$clientID]}{color:$get[clr]}};;;users;false]
$let[payment;$textInputValue[orderForm_payment]]
$let[quantity;$textInputValue[orderForm_quantity]]
$let[item;$textInputValue[orderForm_item]]
$let[arrow;<a#COLON#peppapigshoppe_arrow#COLON#1059035766115815466>]
$let[error;❌]
$let[check;✅]
$let[clr2;$getGuildVar[clr2;$guildID;server]]
$let[clr;$getGuildVar[clr;$guildID;server]]
$let[prefix;$getGuildVar[prefix;$guildID;server]]
	`
	},
	{
		name: "nitroReportForm1",
		prototype: "modal",
		type: "interaction",
		code: `
$channelSendMessage[$channelID;<@$authorID>{newEmbed:{description:> <a#COLON#peppapigshoppe_arrow#COLON#1059035766115815466> **Always remember to send the screenshot of revoke email (Check your gmail account) and the screenshot/link message of your vouch in <#1057338851359735828>.**}{color:$get[clr]}}]
$wait[1s]
$interactionReply[;{newEmbed:{author:$userTag:$userAvatar}{title:<:peppapigshoppe_report:1061638968195690577> | Nitro Report Form Submitted!}{fields:$get[arrow] Discord User & Tag#COLON#,\` $userTag \`,no:$get[arrow] Nitro Gift link given#COLON#,\` $get[nitroLink] \`,no:$get[arrow] Claimer Usertag#COLON#,\` $get[claimer] \`,yes:$get[arrow] Date of purchase#COLON#,\` $get[datePurchase] \`,yes:$get[arrow] Remaining Days/Months#COLON#,\` $get[dateLeft] \`,yes}{footer:Thank you for submitting report form, please wait for @yskaela#2022 to process it shortly.:$userAvatar[$clientID]}{color:$get[clr]}};;;users;false]

$let[dateLeft;$textInputValue[nitroReportForm_dateLeft]]
$let[datePurchase;$textInputValue[nitroReportForm_datePurchase]]
$let[claimer;$textInputValue[nitroReportForm_claimerUsertag]]
$let[nitroLink;$textInputValue[nitroReportForm_nitroLink]]
$let[arrow;<a#COLON#peppapigshoppe_arrow#COLON#1059035766115815466>]
$let[error;❌]
$let[check;✅]
$let[clr2;$getGuildVar[clr2;$guildID;server]]
$let[clr;$getGuildVar[clr;$guildID;server]]
$let[prefix;$getGuildVar[prefix;$guildID;server]]
 `
	},
	{
		name: "premReportForm2",
		prototype: "modal",
		type: "interaction",
		code: `
$channelSendMessage[$channelID;<@$authorID>{newEmbed:{description:> <a#COLON#peppapigshoppe_arrow#COLON#1059035766115815466> **Always remember to send the screenshot of the issue and the screenshot/link message of your vouch in <#1057338851359735828>.**}{color:$get[clr]}}]
$wait[1s]
$interactionUpdate[;{newEmbed:{author:$userTag:$userAvatar}{title:<:peppapigshoppe_report:1061638968195690577> | Premium Acc Form Submitted!}{fields:$get[arrow] Discord User & Tag#COLON#,\` $userTag \`,no:$get[arrow] Premium Item/s Purchased & Subscription/s#COLON#,\` $get[itemSub] \`,no:$get[arrow] Item's Email & Password#COLON#,\` $get[emailPass] \`,no:$get[arrow] Type of Item/s#COLON#,\` $get[typeItem] \`,no:$get[arrow] Replacement Email#COLON#,\` $get[repEmail] \`,no:$get[arrow] Date of Purchase#COLON#,\` $get[datePurchase] \`,no:$get[arrow] Date Reported#COLON#,\` $get[dateNow] \`,no:$get[arrow] Days/Months Used#COLON#,\` $get[dateUsed] \`,no:$get[arrow] Remaining Days/Months#COLON#,\` $get[dateLeft] \`,no:$get[arrow] Issue#COLON#,\` $get[issue] \`,no}{footer:Thank you for submitting report form, please wait for @yskaela#2022 to process it shortly.:$userAvatar[$clientID]}{color:$get[clr]}}]

$let[dateNow;$parseDate[$dateStamp;date]]
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
$let[clr2;$getGuildVar[clr2;$guildID;server]]
$let[clr;$getGuildVar[clr;$guildID;server]]
$let[prefix;$getGuildVar[prefix;$guildID;server]]
 `
	}
];
