Input:
// N = 4
// arr[] = {1, 5, 3, 2}
// Output: 2
// Explanation: There are 2 triplets: 
// 1 + 2 = 3 and 3 +2 = 5 


countTriplet(arr,n){
    //code here
    let triplets = 0;
    let i =0;
    let j = 0;
    let set = new Set(arr);

   for (i =0; i < n; i ++ ) {
       for (j =i+1; j < n; j++) {
           if (set.has(arr[i]+arr[j])) {
               triplets++
           }
       }
   }
   return triplets
}