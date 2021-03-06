function analyze(arr) {
	if (!arr) {
		throw new Error("no argument passed");
	} else {
		if (!arr.length) {
			throw new Error("argument should not be an empty array");
		}

		const sortedArr = ascSort([...arr]);

		let length = arr.length;
		let average = +findAverage(arr).toFixed(2);
		let min = sortedArr[0];
		let max = sortedArr[sortedArr.length - 1];

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
