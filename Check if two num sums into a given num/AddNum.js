// Given an array of integers, return whether or not two numbers sum to a given target, k.
// Note: you may not sum a number with itself.

// Ex: Given the following...

// [1, 3, 8, 2], k = 10, return true (8 + 2)
// [3, 9, 13, 7], k = 8, return false
// [4, 2, 6, 5, 2], k = 4, return true (2 + 2)


function sumFinder(arr, num) {
    let obj = {}
    let diff
  
    for (let i = 0; i < arr.length; i++) {
      diff = num - arr[i]
  
      if (obj[diff]) {
        console.log(obj[diff]);
        return true;
      } else {
        console.log(obj[arr[i]]);
        obj[arr[i]] = true;
      }
    }
    return false
  }
  
  let sumFinderResult = sumFinder([6, 4, 3, 2], 7);
  console.log(sumFinderResult);


  //Another

function twoSum(nums, k) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == k) {
                return true;
            }
        }
    }

    return false;
}
twoSum([6, 4, 3, 2], 7);

// Hashmap solution

function twoSum(nums, k) {
  let set = new Map();
  for(let i = 0; i < nums.length; i++) {
      let difference = k - nums[i];
      if(set.has(difference)) {
          return true;
      }

      set.set(nums[i]);
  }

  return false;
}
twoSum([6, 4, 4, 2], 7);