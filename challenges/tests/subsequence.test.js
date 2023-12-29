import { subsequence } from "../index.js";

test("Finds a specific sequence of letters from an array of objects containing single letter strings.", () => {
  expect(
    subsequence({
      arr: [
        { a: "a" },
        { b: "b" },
        { c: "c" },
        { d: "d" },
        { e: "e" },
        { f: "f" },
      ],
      str: "abcdef",
    })
  ).toBe(true);
});
