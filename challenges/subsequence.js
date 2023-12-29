// Finding a specific sequence of letters from an array of objects containing single letter strings.
export default function subsequence({ arr, str }) {
  // Check if the array is empty or the string is empty
  if (arr.length === 0 || str.length === 0) {
    return false;
  }

  // Initialize the index of the string to find
  let strIndex = 0;

  // Iterate through the array of objects
  for (let i = 0; i < arr.length; i++) {
    // Check if the current object contains the letter to find
    if (arr[i].hasOwnProperty(str[strIndex])) {
      // Increment the index of the string to find
      strIndex++;
    }

    // Check if the index of the string to find is equal to the length of the string to find
    if (strIndex === str.length) {
      // Return true
      return true;
    }
  }

  // Return false
  return false;
}
