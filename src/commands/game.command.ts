import { Client as Context, Message, MessageEmbed } from 'discord.js';
import { Command, Ready } from '../decorators';
import { MessageUtils } from '../utils/message.utils';
import { BaseCommand } from './base.command';
import { GameService } from '../services/index';
import { setDefaultEmbedFooter } from '../config/message.config';

/**
 * @description Bot command games are created in this file
 */
class GameCommand implements BaseCommand {
	/**
	 * @description Help command to know about this module
	 * @param {Context} _ctx
	 * @param {Message} _msg
	 * @return {Promise<void>}
	 */
	@Command({ name: 'game help', description: 'Muestra la lista de comandos del modulo' })
	async help(_ctx: Context, _msg: Message): Promise<void> {
		const commandList = [
			{
				name: 'help',
				description: 'Muestra la lista de comandos del modulo',
				command: 'game help',
			},
			{
				name: 'iq',
				description: 'Genera un numero aleatorio y te devuelve una imagen en base a ese numero',
				command: 'iq',
			},
		];
		/**
		 * @description Construct the embed message
		 */

		const messageUtils = new MessageUtils();
		const newEmbed = new MessageEmbed();
		newEmbed.setTitle('Mensaje de ayuda');
		newEmbed.setFields(
			...commandList.map((v) => {
				return {
					name: v.command,
					value: v.description,
					inline: false,
				};
			}),
		);
		setDefaultEmbedFooter(newEmbed);
		/** Send message to the channel */
		await messageUtils.sendMessageToChannel(newEmbed, _msg.channelId);
	}
	/**
	 * @description When the bot is ready do something
	 */

	@Ready()
	async ready() {
		console.info('Games ready!');
	}

	/**
	 * @description Generates a random number and returns a template string with an image
	 * @param {Context} _ctx
	 * @param {Message} msg
	 * @return {Promise<void>}
	 */

	@Command({ name: 'iq' })
	async iq(_ctx: Context, msg: Message): Promise<void> {
		const newMessage = new MessageUtils();
		try {
			newMessage.sendMessageToChannel(GameService.getIq(msg), msg.channelId);
		} catch (err) {
			console.error(err.message);
			throw new Error(err);
		}
	}
}

export default new GameCommand();
