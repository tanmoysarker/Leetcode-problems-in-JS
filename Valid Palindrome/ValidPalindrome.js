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

//Another

function palindrome(str) {
    var re = /[^A-Za-z0-9]/g; 
    str = str.toLowerCase().replace(re, '');
   
    var len = str.length; 
    
    for (var i = 0; i < len/2; i++) {
      if (str[i] !== str[len - 1 - i]) { 
          return false; 
      }
    }
    return true; 
   }
   
   palindrome("level");


// Another (For int )

var isPalindrome = function(x) {
    
    const len = x.length;
    
    for (let i = 0; i < x/2; i++){
        if (x[i] !== x[len - 1 - i]){
            return false;
        }
        return true;
    }
};

var isPalindrome = function(x) {
    if (x < 0) return false
  
    let rev = 0
    for(let i = x; i >= 1; i = Math.floor(i/10)){
        rev = rev*10 + i%10
    } 
    return rev === x
  };

  var isPalindrome = function(x) {
    const arr = String(x).split('');
        
    while (arr.length > 1) {
        if (arr.shift() !== arr.pop()) {
            return false;
        }
    }
    
    return true;
};