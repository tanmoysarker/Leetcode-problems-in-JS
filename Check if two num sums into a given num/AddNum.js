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
        return true;
      } else {
        obj[arr[i]] = true;
      }
    }
    return false
  }
  
  let sumFinderResult = sumFinder([6, 4, 3, 2], 7)