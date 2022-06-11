// Given a non-negative integer x, compute and return the square root of x.

// Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

// Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.

 

// Example 1:

// Input: x = 4
// Output: 2
// Example 2:

// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.


var mySqrt = function(x) {
    let result = 1;
   while (result*result <= x) result++;
   return result - 1;
};


// Binary solution

const mySqrt = function(x) {
    let start = 0;
    let end = x;
    let res = 0;
    while (start < end) {
        res = Math.ceil((start + end)/2); // 1.
        if (res*res <= x && (res + 1)*(res + 1) > x) return res; // 2.
        if (res*res < x) start = res; // 3.
        else end = res; // 4.
    }
    return res;
};