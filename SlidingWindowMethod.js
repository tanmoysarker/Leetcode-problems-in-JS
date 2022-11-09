// For an array we need to find the max sum of p consecutive elements



function maxSumOfElements(arr, p){
    let max = 0;
    let sum = 0;

    // find initial sum of first p elements
    let  i = 0;
    while(i < p){
        sum = sum + arr[i];
        i++;
    }
    max = sum;

    i = p;

    while( i < arr.length){
        sum += arr[i] - arr[i-p];
        if(sum > max){
            max = sum;
        }
        i++;
    }
    return max;

}

const arr = [2,4,6,1,-2,9,0];
let maxSum = maxSumOfElements(arr, 4);

console.log(maxSum);