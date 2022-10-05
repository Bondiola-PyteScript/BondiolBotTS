export function generateRandom(data: any) {
	return data[Math.floor(Math.random() * data.length)];
}
