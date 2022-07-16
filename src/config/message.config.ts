import { MessageEmbed } from 'discord.js';

export const setDefaultEmbedFooter = (embed: MessageEmbed) => {
	embed.setAuthor('Bondiol Bot Helper', 'https://scontent.faep4-3.fna.fbcdn.net/v/t1.6435-9/33791064_156169605239071_1345637335718428672_n.png?_nc_cat=103&ccb=1-7&_nc_sid=85a577&efg=eyJpIjoidCJ9&_nc_eui2=AeFpXBDaH5oJkRes3rd2RWjiWai0_5pKCOlZqLT_mkoI6dU4CD3NPLWkce68nEs1tpNWuJIPXDyQntfvE-iSS7KK&_nc_ohc=rlyBUrwsx6cAX_Dkh0f&_nc_ht=scontent.faep4-3.fna&oh=00_AT-WwRRIIjxVkqAGn7JYeK7Fl_fwtT-ZzC-zEb8k3_Lg8Q&oe=62F63DEB');
	embed.setFooter('Gracias por usar al Bondiol Bot Helper');
	embed.setImage('https://pbs.twimg.com/media/D723tWPWsAA2jrP.png');
	embed.setColor([0, 194, 3]);
	embed.setThumbnail('https://scontent.faep4-3.fna.fbcdn.net/v/t1.6435-9/33791064_156169605239071_1345637335718428672_n.png?_nc_cat=103&ccb=1-7&_nc_sid=85a577&efg=eyJpIjoidCJ9&_nc_eui2=AeFpXBDaH5oJkRes3rd2RWjiWai0_5pKCOlZqLT_mkoI6dU4CD3NPLWkce68nEs1tpNWuJIPXDyQntfvE-iSS7KK&_nc_ohc=rlyBUrwsx6cAX_Dkh0f&_nc_ht=scontent.faep4-3.fna&oh=00_AT-WwRRIIjxVkqAGn7JYeK7Fl_fwtT-ZzC-zEb8k3_Lg8Q&oe=62F63DEB');
};
