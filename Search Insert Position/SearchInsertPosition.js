// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4



// Mine

var searchInsert = function(nums, target) {
    if (nums.includes(target)){
        return nums.indexOf(target);
    }else{
        for (let i=0; i < nums.length; i++){
            if (nums[i] < target && nums[i+1] > target){
                nums.splice( i+1 ,0, target)
                return nums.indexOf(target);
            }
        }
    }
};


//Another

var searchInsert = function(nums, target) {
    let i = 0;
    let j = nums.length;
    
    while(i < j){
        const middle = Math.floor((i + j) / 2);
        
        if (nums[middle] === target){
            return middle;
        }else if (nums[middle] < target){
            i+= 1;
        }else{
            j-= 1;
        }
    }
    return i;
};