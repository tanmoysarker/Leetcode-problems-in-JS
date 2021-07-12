// Note: a palindrome is a sequence of characters that reads the same forwards and backwards.

// Ex: Given the following strings...

// "level", return true
// "algorithm", return false
// "A man, a plan, a canal: Panama.", return true


// First solution
function palindrome(str){
    const reversed = str.split('').reverse().join();
    return str === reversed;
}

//Second solution
function palindrome(str){
    return str.split('').every((char,i)=>{
        return char === str[str.length() - i - 1];
    })
}