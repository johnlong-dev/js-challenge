import { twoSum } from "../index";

test("Finds two nums in array whose sum matches the target", () => {
  expect(twoSum({ nums: [1, 2, 3, 4, 5], target: 9 })).toEqual([3, 4]);
});
