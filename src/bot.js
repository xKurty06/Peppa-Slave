module.exports = (botKey, cfg) => ({
	Bot: {
		token: botKey,
		prefix: cfg.Prefixes,
		intents: cfg.Intents,
		events: cfg.Events,
		disableFunctions: cfg.DisabledFuncs,
		plugins: [],
		respondToBots: false,
		guildOnly: true,
		autoUpdate: false,
		mobilePlatform: false,
		cache: [],
		database: {
			type: "dbdjs.db",
			db: require("dbdjs.db"),
			tables: cfg.Tables,
			path: "./database/",
			promisify: true
			// extraOptions: {
			// 	dbType: "KeyValue",
			// }
		},
		suppressAllErrors: false,
		errorMessage: cfg.ErrorMessages,
		aoiWarning: false,
		aoiLogs: false,
		respondOnEdit: {
			commands: true,
			alwaysExecute: true,
			nonPrefixed: true,
			time: 30000
		}
	}
});
