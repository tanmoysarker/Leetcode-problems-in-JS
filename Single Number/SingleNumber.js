// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

 

// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4

var nums = [1, 2, 1, 2, 4];

const singleNumber = (nums) => nums.reduce((a, b) => {
  console.log("a: ", a); //0,1,3,2,0
  console.log("b: ", b); //1,2,1,2,4
  return a ^ b;
},0);


// Another

function singleNumber(nums) {
	return nums.reduce((prev, curr) => prev ^ curr);
}