// External modules
import { Message, MessageEmbed } from 'discord.js';

// Internal modules
import { factsData } from '../../data/facts.data';
import { generateRandom } from '../../utils/generate.random';

class FactService {
	constructor() {}

	async getRandomFact(msg: Message): Promise<MessageEmbed> {
		const randomFact = generateRandom(factsData);

		let newEmbed = new MessageEmbed();
		newEmbed.setTitle('Curious Fact');
		newEmbed.setDescription(randomFact.random);
		newEmbed.setColor('#ffff00');

		return newEmbed;
	}
}

export default new FactService();
