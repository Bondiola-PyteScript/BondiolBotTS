import { commandConfig } from '../interfaces/command.config.interface';

export const commandsConfig: commandConfig = {
	name: [
		{
			name: 'Birthday help',
			description: 'Muestra la lista de comandos del modulo',
			command: 'Birthday help',
		},
		{
			name: 'Birthday start',
			description: 'Muestra un dato curioso al azar',
			command: 'Birthday start',
		},
	],
};
