module.exports = (bot) => {
	bot.functionManager.createCustomFunction[
		({
			name: '$varExists',
			type: 'djs',
			code: async (d) => {
				const data = d.util.aoiFunc(d);
				if (data.err) return d.error(data.err);
				const [name, table = 'main'] = data.inside.splits;
				if (!name)
					return d.aoiError.fnError(
						d,
						'custom',
						{},
						'No variable name given.'
					);
				data.result =
					(await d.client.variableManager.cache.get(
						`${name}_${table}`
					)) !== undefined;
				return {
					code: d.util.setCode(data),
				};
			},
		},
		{
			name: '$memberAvatar',
			type: 'djs',
			code: async (d) => {
				const data = d.util.aoiFunc(d);
				const [guildID = d.guild.id, user = d.author.id] =
					data.inside.splits;
				data.result = d.client.guilds.cache
					.get(guildID)
					.members.cache.get(user)
					.avatarURL({ size: 2048 });
				return {
					code: d.util.setCode(data),
				};
			},
		}
		)];
};
