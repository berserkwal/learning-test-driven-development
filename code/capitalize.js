function capitalize(string) {
	return string.length ? string[0].toUpperCase() + string.slice(1) : "";
}

module.exports = capitalize;
