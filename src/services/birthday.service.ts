// External modules
import { Message, MessageEmbed } from 'discord.js';

// Internal modules
import { birthdayData } from '../data/birthday.data';

class BirthdayService {
	constructor() {}

	async findNexts(msg: Message): Promise<MessageEmbed> {
		const nextBirthdays = this.nextBirthdays();

		let newEmbed = new MessageEmbed();
		newEmbed.setTitle('Next Birthdays');
		newEmbed.setDescription(nextBirthdays);
		newEmbed.setColor('#ffff00');

		return newEmbed;
	}

	private nextBirthdays(): any {
		const today = new Date();

		const nexts = birthdayData.map((birthday) => {
			const birthdayDate = new Date(birthday.birthday);
			const nextBirthday = new Date(today.getFullYear(), birthdayDate.getMonth(), birthdayDate.getDate());

			const nextBirthdayString = nextBirthday.toDateString();

			return {
				name: birthday.name,
				birthday: nextBirthdayString,
			};
		});

		return nexts;
	}
}

export default new BirthdayService();
