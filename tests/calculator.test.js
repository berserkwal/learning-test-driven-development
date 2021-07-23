const calculator = require("../code/calculator");

test("adds two numbers", () => {
	expect(calculator.add(2, 8)).toBe(10);
});
test("adds a positive number and a zero", () => {
	expect(calculator.add(8, 0)).toBe(8);
});
test("adds two zeroes", () => {
	expect(calculator.add(0, 0)).toBe(0);
});
test("adds a positive and a negative", () => {
	expect(calculator.add(10, -4)).toBe(6);
});
test("adds two negatives", () => {
	expect(calculator.add(-5, -8)).toBe(-13);
});

test("subtracts two numbers", () => {
	expect(calculator.subtract(10, 8)).toBe(2);
});
test("subtracts greater number from a smaller number", () => {
	expect(calculator.subtract(2, 22)).toBe(-20);
});
test("subtracts zero from a number", () => {
	expect(calculator.subtract(8, 0)).toBe(8);
});
test("subtracts zero from zero", () => {
	expect(calculator.subtract(0, 0)).toBe(0);
});
test("subtracts a negative number from a positive number", () => {
	expect(calculator.subtract(10, -4)).toBe(14);
});
test("subtracts two negatives", () => {
	expect(calculator.subtract(-5, -8)).toBe(3);
});

test("multiplies two numbers", () => {
	expect(calculator.multiply(4, 3)).toBe(12);
});
test("multiplies a positive and a negative number", () => {
	expect(calculator.multiply(4, -6)).toBe(-24);
});
test("multiplies two negative numbers", () => {
	expect(calculator.multiply(-6, -5)).toBe(30);
});
test("multiplies number with 0", () => {
	expect(calculator.multiply(14, 0)).toBe(0);
});

test("divides two numbers", () => {
	expect(calculator.divide(15, 3)).toBe(5);
});
test("divides a positive number by a negative number", () => {
	expect(calculator.divide(4, -2)).toBe(-2);
});
test("divides two negative numbers", () => {
	expect(calculator.divide(-6, -2)).toBe(3);
});
test("divides number by 0", () => {
	expect(() => calculator.divide(14, 0)).toThrow(Error);
});
test("divides 0 by any number", () => {
	expect(calculator.divide(0, 200)).toBe(0);
});
