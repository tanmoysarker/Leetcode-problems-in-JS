// Given a string s, return the longest palindromic substring in s.

 

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"

var longestPalindrome = function(s) {
    let len = s.length;
    while (len>0) {
        for (let i=0; i<s.length-len+1; i++) {
            let str = s.slice(i, i+len);
            if (isPalindrom(str))
                return str;
        }
        len--;
    }
    return "";
};

const isPalindrom = function(arr) {
let i=0;
let j=arr.length-1;
while (i<=j) {
    if (arr[i]!==arr[j])
        return false;
    i++; j--;
}
return true;
}

