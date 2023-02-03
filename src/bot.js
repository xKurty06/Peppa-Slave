module.exports = (botKey, cfg) => ({
	Bot: {
		token: botKey,
		prefix: cfg.Prefixes,
		intents: cfg.Intents,
		database: {
			db: require("dbdjs.db"),
			type: "dbdjs.db",
			path: "./database/",
			tables: cfg.Tables,
			promisify: true
		},
		respondOnEdit: {
			commands: true,
			nonPrefixed: true,
			alwaysExecute: true,
			time: "30000"
		},
		cache: cfg.Caches,
		mobilePlatform: false,
		disableLogs: false,
		plugins: [],
		sharding: true,
		shardAmount: "1000",
		suppressPackageErrors: true,
		suppressAllErrors: false,
		errorMessage: cfg.ErrorMessages,
		events: { functionError: true },
		disableFunctions: [],
		autoUpdate: false
	}
});
