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