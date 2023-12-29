import { sumArray } from "../index.js";

test("Sums array of numbers", () => {
  expect(sumArray({ nums: [1, 2, 3] })).toBe(6);
});
