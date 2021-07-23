function analyze(arr) {
	console.log(arr);
	if (!arr) {
		throw new Error("no argument passed");
	} else {
		if (!arr.length) {
			throw new Error("argument should not be an empty array");
		}

		ascSort(arr);

		let length = arr.length;
		let average = findAverage([...arr]);
		let min = arr[0];
		let max = arr[length - 1];

		return {
			average,
			min,
			max,
			length,
		};
	}
}

function findAverage(arg) {
	const len = arg.length;
	return arg.reduce((tot, curr) => {
		return tot + curr / len;
	}, 0);
}

function ascSort(arr) {
	return arr.sort((a, b) => (a > b ? 1 : -1));
}

module.exports = analyze;
