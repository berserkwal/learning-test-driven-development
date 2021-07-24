function reverseString(string) {
	return string
		.split("")
		.sort(() => {
			return -1;
		})
		.join("");
}

module.exports = reverseString;
