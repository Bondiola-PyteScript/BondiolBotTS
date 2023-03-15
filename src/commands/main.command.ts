import { Client, Message, MessageEmbed } from 'discord.js';
import { setDefaultEmbedFooter } from '../config/message.config';
import { Command, Ready } from '../decorators';
import { CommandExecute } from '../decorators/command.decorator';
import { MessageUtils } from '../utils/message.utils';
import { BaseCommand } from './base.command';

export class MainCommand implements BaseCommand {
	@Ready()
	async ready(_ctx: Client<boolean>): Promise<void> {
		console.log('Main command ready!');
	}

	@Command({ name: 'help', description: 'Lista de todos los comandos disponibles' })
	async help(_ctx: Client<boolean>, _msg: Message): Promise<void> {
		const commandList = [];
		CommandExecute.forEach((v) => {
			commandList.push({
				name: v.name,
				description: v.description,
				prefix: v.prefix,
			});
		});
		const messageUtils = new MessageUtils();
		const embed2 = new MessageEmbed();
		embed2.setTitle('Lista de comandos');
		embed2.setColor('#0099ff');
		commandList.forEach((v) => {
			embed2.addField(`${v.prefix}${v.name}`, v.description || 'Sin descripcion', false);
		});
		setDefaultEmbedFooter(embed2);
		messageUtils.sendMessageToChannel(embed2, _msg.channel.id);
	}
}
