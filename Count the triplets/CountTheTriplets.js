Input:
// N = 4
// arr[] = {1, 5, 3, 2}
// Output: 2
// Explanation: There are 2 triplets: 
// 1 + 2 = 3 and 3 +2 = 5 


countTriplet(arr,n)
{
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

//Another solution added

function countWays(arr,n)
{
    // compute the max value in the array
    // and create frequency array of size
    // max_val + 1.
    // We can also use HashMap to store
    // frequencies. We have used an array
    // to keep remaining code simple.
    let max_val = 0;
    for (let i = 0; i < n; i++)
        max_val = Math.max(max_val, arr[i]);
    let freq = new Array(max_val + 1);
    for(let i=0;i<freq.length;i++)
    {
        freq[i]=0;
    }
    for (let i = 0; i < n; i++)
        freq[arr[i]]++;

    let ans = 0; // stores the number of ways

    // Case 1: 0, 0, 0
    ans += freq[0] * (freq[0] - 1) * (freq[0] - 2) / 6;

    // Case 2: 0, x, x
    for (let i = 1; i <= max_val; i++)
        ans += freq[0] * freq[i] * (freq[i] - 1) / 2;

    // Case 3: x, x, 2*x
    for (let i = 1; 2 * i <= max_val; i++)
        ans += freq[i] * (freq[i] - 1) / 2 * freq[2 * i];

    // Case 4: x, y, x + y
    // iterate through all pairs (x, y)
    for (let i = 1; i <= max_val; i++) {
        for (let j = i + 1; i + j <= max_val; j++)
            ans += freq[i] * freq[j] * freq[i + j];
    }

    return ans;
}

let arr=[1, 2, 3, 4, 5];
let n = arr.length;
document.write(countWays(arr, n));