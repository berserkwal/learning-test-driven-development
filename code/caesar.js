function caesar(string, offset) {
	return string
		.split("")
		.map((item) => {
			const char = item.charCodeAt(0);
			if (char >= 65 && char <= 90) {
				const codedChar = (char - 65 + offset) % 26;
				return String.fromCharCode(
					(codedChar < 0 ? codedChar + 26 : codedChar) + 65
				);
			} else if (char >= 97 && char <= 122) {
				const codedChar = (char - 97 + offset) % 26;
				return String.fromCharCode(
					(codedChar < 0 ? codedChar + 26 : codedChar) + 97
				);
			} else return String.fromCharCode(char);
		})
		.join("");
}

console.log(caesar("this worked well", 3));

module.exports = caesar;
