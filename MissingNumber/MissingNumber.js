// Input:
// N = 5
// A[] = {1,2,3,5}
// Output: 4


MissingNumber(array,n){
    //code here
    var numArr = array.sort()
    for(let i = 0; i<numArr.length; i++){
      let x = numArr[i] - numArr[i - 1];
      let diff = 1;
      while (diff < x) {
        return (numArr[i - 1] + diff);
        diff++;
      }
    }
    
}


MissingNumber(array,n){
    //code here
  var sum =0;
   for(let i =0; i<n-1;i++){
       sum = sum + array[i];
   }
   var ans = (n*(n+1)/2) - sum ;
   return ans;
}