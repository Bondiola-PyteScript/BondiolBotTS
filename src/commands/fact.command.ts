// External modules
import { Client as Context, Message, MessageEmbed } from 'discord.js';

// Internal modules
import factService from '../services';
import { Command } from '../decorators';
import { BaseCommand } from './Base.command';
import { setDefaultEmbedFooter } from '../config/message.config';
import { commandsConfig } from '../config/command.config';
import { setFieldsConfig } from '../utils/set.fields';
import { MessageUtils } from '../utils/message.utils';

export class FactCommand implements BaseCommand {
	constructor() {}

	ready(_ctx: Context<boolean>): Promise<void> {
		throw new Error('Method not implemented.');
	}

	@Command({ name: 'fact' })
	async fact(_ctx: Context, msg: Message): Promise<void> {
		const newMessage = new MessageUtils();

		try {
			const questions = await factService.getRandomFact(msg);
			newMessage.sendMessageToChannel(questions, msg.channelId);
		} catch (err) {
			console.error(err.message);
			throw new Error(err);
		}
	}

	@Command({ name: 'fact help', description: 'Muestra la lista de comandos del modulo' })
	async help(_ctx: Context<boolean>, _msg: Message<boolean>): Promise<void> {
		const messageUtils = new MessageUtils();
		const newEmbed = new MessageEmbed();

		newEmbed.setTitle('Mensaje de ayuda');
		newEmbed.setFields(setFieldsConfig(commandsConfig));

		setDefaultEmbedFooter(newEmbed);
		await messageUtils.sendMessageToChannel(newEmbed, _msg.channelId);
	}
}
