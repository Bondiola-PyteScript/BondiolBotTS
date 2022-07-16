/* eslint-disable indent */
import { Message } from 'discord.js';

class GameService {
	/** Message for the IQ method  * */
	private readonly MessageDefault = '🧠 Tu IQ es: ';

	/**
	 * @description Given a random number returns a gif
	 * @param {Number} iq
	 * @returns {String} URL with a gif
	 */

	public getImage(iq: number): string {
		const data = [
			{
				cond: (iqCondition: number) => iqCondition == 200,
				image: 'https://c.tenor.com/aMdHQyej-hgAAAAC/atat%C3%BCrklisesindeokudumamagerizekaliyim-9a.gif',
			},
			{
				cond: (iqCondition: number) => iqCondition == 0,
				image: 'https://c.tenor.com/wgDTOc2-ObgAAAAM/retarded.gif',
			},
			{
				cond: (iqCondition: number) => iqCondition < 15,
				image: 'https://c.tenor.com/-8FN3600BesAAAAM/down-syndrome.gif',
			},
			{
				cond: (iqCondition: number) => iqCondition >= 16 && iqCondition <= 69,
				image: 'https://tenor.com/view/downs-down-syndrome-huh-look-back-what-gif-12361802',
			},
			{
				cond: (iqCondition: number) => iqCondition >= 70 && iqCondition <= 100,
				image: 'https://c.tenor.com/iXq_oSpqtssAAAAd/sad-sad-face.gif',
			},
			{
				cond: (iqCondition: number) => iqCondition >= 101 && iqCondition <= 150,
				image: 'https://c.tenor.com/kTX3PiTNHz8AAAAC/wojak-wojak-sunset.gif',
			},
			{
				cond: (iqCondition: number) => iqCondition >= 151 && iqCondition <= 199,
				image: 'https://c.tenor.com/Mx9N3q-86OgAAAAM/big-brain-big-brain-wojak.gif',
			},
		];
		return data.find((c) => c.cond(iq))?.image || 'https://c.tenor.com/9ka4oY-LsQsAAAAd/confused-indian.gif';
	}

	/**
	 * @param {Message} msg
	 * @param {String} defaultMessage
	 * @param {Number} iq
	 * @param {String} image
	 * @returns {String} A message with the entire response
	 */

	public getMessage(msg: Message, defaultMessage: string, iq: number, image: string): string {
		return `${msg.author} - ${defaultMessage} ${iq} ${image}`;
	}

	/**
	 * @param {Message} msg
	 * @description Generates a random number and returns a template string with an image
	 * @returns {String}
	 */

	public getIq(msg: Message): string {
		/** Generate a random number  **/
		const randomTo200 = Math.floor(Math.random() * 200);
		return this.getMessage(msg, this.MessageDefault, randomTo200, this.getImage(randomTo200));
	}
}

export default new GameService();
