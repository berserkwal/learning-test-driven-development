const reverseString = require("../code/reverse");

test("works with strings with single word", () => {
	expect(reverseString("hello")).toBe("olleh");
});
test("works with strings with multiple words", () => {
	expect(reverseString("hello world")).toBe("dlrow olleh");
});
test("works with strings but preserves the case", () => {
	expect(reverseString("Hello")).toBe("olleH");
});
test("works with strings including the punctuation", () => {
	expect(reverseString("hello, world!")).toBe("!dlrow ,olleh");
});
test("works with strings with numbers", () => {
	expect(reverseString("together4ever")).toBe("reve4rehtegot");
});
test("works with blank strings", () => {
	expect(reverseString("")).toBe("");
});
