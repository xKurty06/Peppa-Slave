module.exports = {
	name: "test",
	code: `
$channelSendMessage[$channelID;{newEmbed:{title:<#COLON#peppapigshoppe_happypeppa#COLON#1060268959724740720> Hello Shopper!}{description:> <a#COLON#peppapigshoppe_arrow#COLON#1059035766115815466> | Want to order or report now? Click the Green Button below to make an <:peppapigshoppe:1057625427029540904>Order Form and Red Button for the <:peppapigshoppe_report:1061638968195690577>Report Form!\n\n> 📌 | If the bot is offline, please send the format manually from <#1059307766684073984> channel.}{color:$get[clr]}}{actionRow:{button:Order here:success:orderForm:no:<#COLON#peppapigshoppe#COLON#1057625427029540904>}{button:Nitro:danger:nitroReportForm:no:<#COLON#peppapigshoppe_report#COLON#1061638968195690577>}{button:Premium Acc:danger:premReportForm:no:<#COLON#peppapigshoppe_report#COLON#1061638968195690577>}}]

$let[arrow;<a#COLON#peppapigshoppe_arrow#COLON#1059035766115815466>]
$let[error;❌]
$let[check;✅]
$let[clr2;$getServerVar[clr2;$guildID;server]]
$let[clr;$getServerVar[clr;$guildID;server]]
$let[prefix;$getServerVar[prefix;$guildID;server]]
    `
};
