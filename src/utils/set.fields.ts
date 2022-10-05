
// Internal modules
import { commandConfig } from '../interfaces/command.config.interface';

export function setFieldsConfig(commandsConfig: commandConfig) {
	return commandsConfig.facts.map((value) => {
		return {
			name: value.command,
			value: value.description,
			inline: false,
		};
	});
}
