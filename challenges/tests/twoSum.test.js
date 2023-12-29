import { twoSum } from "../index";

test("Sums array of numbers", () => {
  expect(twoSum({ nums: [1, 2, 3, 4, 5], target: 9 })).toEqual([3, 4]);
});
