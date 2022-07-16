import { Message, Client as Context } from 'discord.js';

export class BaseCommand {
	async ready(_ctx: Context) {
		throw new Error('Method Ready isnt implemented.');
	}

	async help(_ctx: Context, _msg: Message) {
		throw new Error('Method Help isnt implemented.');
	}
}

export type TCommand = {
	message?: Message;
	args?: string[];
};
