module.exports = (loader, bot, Kurt) => {
// bot.onMessage({
// 	guildOnly: true,
// 	respondToBots: false
// });
// bot.onMessageDelete();
// bot.onMessageUpdate();
// bot.onMessageDeleteBulk();
// bot.onGuildJoin();
// bot.onGuildLeave();
// bot.onGuildUpdate();
// bot.onGuildUnavailable();
// bot.onRoleCreate();
// bot.onRoleUpdate();
// bot.onRoleDelete();
// bot.onChannelCreate();
// bot.onChannelUpdate();
// bot.onChannelDelete();
// bot.onChannelPinsUpdate();
// bot.onStageInstanceCreate();
// bot.onStageInstanceUpdate();
// bot.onStageInstanceDelete();
// // bot.onThreadCreate();
// // bot.onThreadUpdate();
// // bot.onThreadDelete();
// // bot.onThreadListSync();
// // bot.onThreadMemberUpdate();
// // bot.onThreadMembersUpdate();
// bot.onJoin();
// bot.onLeave();
// bot.onMemberUpdate();
// bot.onMemberAvailable();
// bot.onMembersChunk();
// bot.onEmojiCreate();
// bot.onEmojiDelete();
// bot.onEmojiUpdate();
// bot.onStickerCreate();
// bot.onStickerDelete();
// bot.onStickerUpdate();
// bot.onBanAdd();
// bot.onBanRemove();
// bot.onReactionAdd();
// bot.onReactionRemove();
// bot.onReactionRemoveAll();
// bot.onReactionRemoveEmoji();
// bot.onVoiceStateUpdate();
// bot.onPresenceUpdate();
// // bot.onTypingStart();
// bot.onInteractionCreate();
// bot.onApplicationCmdCreate();
// bot.onApplicationCmdDelete();
// bot.onApplicationCmdUpdate();
// bot.onUserUpdate();
// bot.onVariableCreate();
// bot.onVariableDelete();
// bot.onVariableUpdate();
// bot.onRateLimit();
// bot.onWebhookUpdate();
// // bot.onShardDisconnect();
// // bot.onShardError();
// // bot.onShardReady();
// // bot.onShardReconnecting();
// // bot.onShardResume();
	bot.AoiError = Kurt.AoiError;
	loader.load(bot.cmd, "./commands/");
	loader.setColors({
		walking: ["blink", "dim", "fgWhite"],
		failedWalking: {
			name: ["bright", "fgYellow", "underline"],

			text: ["gray", "fgRed"]
		},
		typeError: {
			command: ["bright", "fgYellow"],
			type: ["fgYellow"],
			text: ["bright", "fgRed"]
		},
		failLoad: {
			command: ["bright", "fgMagenta"],
			type: ["fgRed"],
			text: ["bright", "fgRed"]
		},
		loaded: {
			command: ["bright", "fgRed"],
			type: ["bright", "fgWhite"],
			text: ["bright", "fgBlue"]
		}
	});
};
