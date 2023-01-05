module.exports = [{
	type: "channelCreate",
	channel: " ",
	code: `
$channelSendMessage[$get[channelID];{
"content": "<@886620575735373825>",
"embeds": "{newEmbed:{title:<:peppapigshoppe_happypeppa:1060268959724740720> Hello Shopper!}{description:> $get[arrow] | Want to order now? Click the button below to make an order form!}{footer:📌 If the bot is offline, please send the order format manually.}{color:$get[clr]}}",
"components": "{actionRow:{button:Click to Order:success:orderForm:no:<:peppapigshoppe:1057625427029540904>}}"
}]
$wait[1s]

$onlyIf[$isNumber[$splitText[2]]==true;]
$onlyIf[$splitText[1]==ticket;]
$textSplit[$newChannel[name];-]
$onlyIf[$channelCategoryID[$get[channelID]]==$get[ticketCatID];]
$onlyIf[$get[status]==enabled;]

$let[ticketCatID;$getServerVar[ticketHelper;$guildID;server]]
$let[status;$getServerVar[ticketStatus;$guildID;server]]
$let[channelID;$newChannel[id]]
$let[arrow;<a#COLON#peppapigshoppe_arrow#COLON#1059035766115815466>]
$let[error;❌]
$let[check;✅]
$let[clr2;$getServerVar[clr2;$guildID;server]]
$let[clr;$getServerVar[clr;$guildID;server]]
$let[prefix;$getServerVar[prefix;$guildID;server]]
`}, {
	name: "orderForm",
	prototype: "button",
	type: "interaction",
	code: `
$interactionModal[Fill the order form;orderForm1;
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
$let[arrow;<#COLON#arrow2#COLON#1055144562257047702>]
$let[error;❌]
$let[check;✅]
$let[clr2;$getServerVar[clr2;$guildID;server]]
$let[clr;$getServerVar[clr;$guildID;server]]
$let[prefix;$getServerVar[prefix;$guildID;server]]
`}, {
	name: "orderForm1",
	prototype: "modal",
	type: "interaction",
	code: `
$color[$get[clr]]
$description[・─  **GCASH**\`\`\`
~> 09076080723
~> GL P.\`\`\`
・─  **NOTE**\`\`\`
~> Always include payment receipt.
~> No rush orders. We're doing all we can to get you your item/s as soon as possible.\`\`\`]
$thumbnail[https://cdn.discordapp.com/attachments/1057866510997139477/1058049552906727516/IMG_4416.png]

$onlyIf[$checkContains[$toLowercase[$get[payment]];gcash]==true;]

$interactionReply[;{newEmbed:{author:$userTag:$authorAvatar}{fields:$get[arrow] Name of Item/s#COLON#,\` $get[item] \`,no:$get[arrow] Quantity#COLON#,\` $get[quantity] \`,yes:$get[arrow] Mode of payment#COLON#,\` $get[payment] \`,yes}{footer:Thank you for submitting an order form, please wait for @yskaela#2022 to process it.}{color:$get[clr]}}]

$let[payment;$textInputValue[orderForm_payment]]
$let[quantity;$textInputValue[orderForm_quantity]]
$let[item;$textInputValue[orderForm_item]]
$let[arrow;<a#COLON#peppapigshoppe_arrow#COLON#1059035766115815466>]
$let[error;❌]
$let[check;✅]
$let[clr2;$getServerVar[clr2;$guildID;server]]
$let[clr;$getServerVar[clr;$guildID;server]]
$let[prefix;$getServerVar[prefix;$guildID;server]]
 `}]