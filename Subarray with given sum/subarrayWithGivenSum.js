Input:
// N = 5, S = 12
// A[] = {1,2,3,7,5}
// Output: 2 4
// Explanation: The sum of elements 
// from 2nd position to 4th position 
// is 12.

subarraySum(arr, n, s)
{
       var start = 0;
       var sum =0;
       var arr1 = [];
       for(var i=0;i<n;i++){
           if(sum == s){
               arr1.push(start+1);
               arr1.push(i);
               return arr1;
           }else if(sum < s){
               sum = sum+ arr[i];
           }else if( sum > s){
               sum = sum-arr[start];
               start = start+1;
               i = i-1;
           }else{
               return false;
           }
       }
    }

// Another

function sumArr(arr,n,sum){
    let curr_sum = 0;
    
    for (let i = 0; i < n; i++){
        curr_sum = arr[i];
        for (let j = i + 1; j < n; j++) {
            if (curr_sum === sum){
                console.log(`found between ${i} and ${j-1}`);
            }
            if (curr_sum > sum || j == n)
             break;
           curr_sum = curr_sum + arr[j] ;
            
        }
    }
    return;
}

// Nested loop is used to traverse the array so the time complexity is O(n^2)
// Space Complexity: O(1). As constant extra space is required.