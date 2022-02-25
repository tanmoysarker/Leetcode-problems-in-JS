var searchRange = function(nums, target) {
    if (nums.length === 0) return [-1, -1]
  
    let arr = []
    arr.push(nums.indexOf(target))
    arr.push(nums.lastIndexOf(target))
  
    return arr
  
  };


  //Another

  var searchRange = function(nums, target) {
    let start = 0, end = nums.length-1, mid, firstOccurance=-1, lastOccurance=-1;
    
    //finding first occurance
    while(start <= end) {
        mid = Math.floor((start+end)/2);
        if(nums[mid]===target) {
            firstOccurance = mid;
            end = mid-1;
        } else if(nums[mid] < target) {
            start = mid+1;
        } else {
            end = mid-1;
        }
    }
    start = 0; end = nums.length-1;
    
    //finding last occurance
    while(start <= end) {
        mid = Math.floor((start+end)/2);
        if(nums[mid]===target) {
            lastOccurance = mid;
            start = mid+1;
        } else if(nums[mid] < target) {
            start = mid+1;
        } else {
            end = mid-1;
        }
    }
    return [firstOccurance,lastOccurance];
};