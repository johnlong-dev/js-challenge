import { validParens } from "../index.js";

test("Validate valid parens '()[]{}' returns as valid", () => {
  expect(validParens({ parens: "()[]{}" })).toBe(true);
});

test("Validate valid parens '(({}))' returns as valid", () => {
  expect(validParens({ parens: "(({}))" })).toBe(true);
});

test("Validate valid parens '(]' returns as invalid", () => {
  expect(validParens({ parens: "(]" })).toBe(false);
});
