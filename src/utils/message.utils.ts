import { Message, Client, MessageEmbed } from 'discord.js';
import { MessageEmbedCustom, MessageEmbedUser } from '../@types';
import { client } from '../client/client.instance';

export class MessageUtils {
	_client: Client;

	constructor() {
		this._client = client;
	}

	static withBacktick(message: string, length: number) {
		const start = message.padStart(message.length + length, '`');
		return start.padEnd(start.length + length, '`');
	}

	async sendMessageToUser(content: MessageEmbed | string, userId: string) {
		try {
			const user = await this._client.users.fetch(userId);
			if (typeof content === 'string') {
				return user.send(content);
			}
			return user.send({ embeds: [content] });
		} catch (error) {
			throw new Error(error);
		}
	}

	async sendMessageToChannel(content: MessageEmbed | string, channelId: string) {
		try {
			const channel = await this._client.channels.fetch(channelId);
			if (typeof content === 'string') {
				return channel.isText() && channel.send(content);
			}
			return channel.isText() && channel.send({ embeds: [content] });
		} catch (error) {
			throw new Error(error);
		}
	}

	buildEmbed(options: MessageEmbedCustom | MessageEmbedUser) {
		const embed = new MessageEmbed();
		if (options.author) embed.setAuthor(options.author.name, options.author.iconURL, options.author.url);
		if (options.color) embed.setColor(options.color || 'DEFAULT');
		if (options.description) embed.setDescription(options.description);
		if (options.footer) embed.setFooter(options.footer.text, options.footer.iconURL);
		if (options.image) embed.setImage(options.image);
		if (options.thumbnail) embed.setThumbnail(options.thumbnail);
		if (options.title) embed.setTitle(options.title);
		if (options.URL) embed.setURL(options.URL);
		if (options.fields) embed.addFields(options.fields);
		embed.setTimestamp();

		if (options.mentions) {
			const users = options.mentions.map((mention) => `<@${mention}>`).join(' ');
			this.sendMessageToChannel(users, options.channel).then((msg) => msg.delete());
		}
		return embed;
	}
}
