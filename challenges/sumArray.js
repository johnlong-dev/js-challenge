export default function sumArray({ nums }) {
  let count = 0;
  if (Array.isArray(nums)) {
    for (let i = 0; i < nums.length; i++) {
      // if (!isNaN(nums[i])) {
      count += nums[i];
      // }
    }
  }
  return count;
}
