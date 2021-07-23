const capitalize = require("../code/capitalize");

test("works with strings with single word", () => {
	expect(capitalize("hello")).toBe("Hello");
});
test("works with strings with multiple words", () => {
	expect(capitalize("hello world")).toBe("Hello world");
});
test("works with strings with numbers at the start", () => {
	expect(capitalize("4mula")).toBe("4mula");
});
test("works with empty strings", () => {
	expect(capitalize("")).toBe("");
});
