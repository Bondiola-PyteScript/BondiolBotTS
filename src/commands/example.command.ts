/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Client as Context, Message } from 'discord.js';
import { Command, Ready } from '../decorators';
import { BaseCommand } from './base.command';

export class ExampleCommand implements BaseCommand {
	help(_ctx: Context<boolean>, _msg: Message): Promise<void> {
		throw new Error('Method not implemented.');
	}
	@Ready()
	async ready(ctx: Context) {
		console.log('Rant ready!');
	}

	@Command({ name: 'exampleCMD' })
	async example(ctx: Context, msg: Message) {}
}
