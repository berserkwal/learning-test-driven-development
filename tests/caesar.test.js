const caesar = require("../code/caesar");

test("works with a single letter", () => {
	expect(caesar("v", 3)).toBe("y");
});

test("works with a word", () => {
	expect(caesar("crash", 2)).toBe("etcuj");
});

test("wraps around", () => {
	expect(caesar("z", 4)).toBe("d");
});

test("keeps the same case", () => {
	expect(caesar("Mouse", 5)).toBe("Rtzxj");
});
test("works with sentence without affecting spaces", () => {
	expect(caesar("this is good", 6)).toBe("znoy oy muuj");
});
test("does not shift punctuations", () => {
	expect(caesar("yes, no, maybe?", 3)).toBe("bhv, qr, pdbeh?");
});

test("works with negative shifts to decode", () => {
	expect(caesar("wklv zrunhg zhoo", -3)).toBe("this worked well");
});
