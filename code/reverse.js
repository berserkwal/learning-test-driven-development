function reverseString(string) {
	const reverse = [];

	for (let i = string.length - 1; i >= 0; i--) {
		reverse.push(string[i]);
	}
	return reverse.join("");
}

module.exports = reverseString;
