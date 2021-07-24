const calculator = require("../code/calculator");

describe("add", () => {
	test("two numbers", () => {
		expect(calculator.add(2, 8)).toBe(10);
	});
	test("a positive number and a zero", () => {
		expect(calculator.add(8, 0)).toBe(8);
	});
	test("two zeroes", () => {
		expect(calculator.add(0, 0)).toBe(0);
	});
	test("a positive and a negative", () => {
		expect(calculator.add(10, -4)).toBe(6);
	});
	test("two negatives", () => {
		expect(calculator.add(-5, -8)).toBe(-13);
	});
});

describe("subtract", () => {
	test("two numbers", () => {
		expect(calculator.subtract(10, 8)).toBe(2);
	});
	test("greater number from a smaller number", () => {
		expect(calculator.subtract(2, 22)).toBe(-20);
	});
	test("zero from a number", () => {
		expect(calculator.subtract(8, 0)).toBe(8);
	});
	test("zero from zero", () => {
		expect(calculator.subtract(0, 0)).toBe(0);
	});
	test("a negative number from a positive number", () => {
		expect(calculator.subtract(10, -4)).toBe(14);
	});
	test("two negatives", () => {
		expect(calculator.subtract(-5, -8)).toBe(3);
	});
});

describe("multiply", () => {
	test("two numbers", () => {
		expect(calculator.multiply(4, 3)).toBe(12);
	});
	test("a positive and a negative number", () => {
		expect(calculator.multiply(4, -6)).toBe(-24);
	});
	test("two negative numbers", () => {
		expect(calculator.multiply(-6, -5)).toBe(30);
	});
	test("number with 0", () => {
		expect(calculator.multiply(14, 0)).toBe(0);
	});
});

describe("divide", () => {
	test("two numbers", () => {
		expect(calculator.divide(15, 3)).toBe(5);
	});
	test("a positive number by a negative number", () => {
		expect(calculator.divide(4, -2)).toBe(-2);
	});
	test("two negative numbers", () => {
		expect(calculator.divide(-6, -2)).toBe(3);
	});
	test("number by 0", () => {
		expect(calculator.divide(14, 0)).toBeUndefined();
	});
	test("0 by any number", () => {
		expect(calculator.divide(0, 200)).toBe(0);
	});
});
