const analyze = require("../code/arrayAnalysis");

test("works with single item in array", () =>
	expect(analyze([12])).toEqual({
		average: 12,
		min: 12,
		max: 12,
		length: 1,
	}));

test("works with positive numbers", () =>
	expect(analyze([1, 8, 3, 4, 2, 6])).toEqual({
		average: 4,
		min: 1,
		max: 8,
		length: 6,
	}));

test("throws error when empty array is provided", () =>
	expect(() => analyze([])).toThrow(Error));

test("throws error when no argument is passed", () =>
	expect(() => analyze([])).toThrow(Error));

test("works with negative numbers", () =>
	expect(analyze([1, 12, -3, 5, -2, 19, 21, 11, 4, 2])).toEqual({
		average: 7,
		min: -3,
		max: 21,
		length: 10,
	}));

test("works when all items are same", () =>
	expect(analyze([5, 5, 5, 5])).toEqual({
		average: 5,
		min: 5,
		max: 5,
		length: 4,
	}));
