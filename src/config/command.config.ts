import { commandConfig } from '../interfaces/command.config.interface';

export const commandsConfig: commandConfig = {
	facts: [
		{
			name: 'fact help',
			description: 'Muestra la lista de comandos del modulo',
			command: 'fact help',
		},
		{
			name: 'fact start',
			description: 'Muestra un dato curioso al azar',
			command: 'fact start',
		},
	],
};
