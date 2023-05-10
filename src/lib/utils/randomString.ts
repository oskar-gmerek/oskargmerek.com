function randomString(length: number) {
	let random = '';
	const chars = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890';

	for (let i = 0; i < length; i++) {
		random += chars.charAt(Math.floor(Math.random() * chars.length));
	}
	return random;
}

export default randomString;
