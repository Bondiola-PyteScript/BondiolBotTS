import axios from 'axios';

class DolarService {
	/**
	 * @description Static messages for the service
	 */
	private readonly baseURL: string = 'https://api.bluelytics.com.ar/v2/latest';
	private readonly baseMessage: string = '💵 El precio average del dolar blue es ';
	private readonly sourceApi: string = 'El valor es tomado de -> https://bluelytics.com.ar/#!/';

	/**
	 * @description Get the avg price of the USD currency against the ARS
	 * @returns {Promise<String>} Response for the channel in a template String
	 */

	async getData(): Promise<string> {
		try {
			const response = await axios.get(this.baseURL);
			const data = await response.data;
			const price = data.blue?.value_avg;
			return `${this.baseMessage} ${price} 💵 \nℹ️ ${this.sourceApi}`;
		} catch (err) {
			throw new Error(err.message);
		}
	}
}

export default new DolarService();
