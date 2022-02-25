// Given two strings s and t, which represents a sequence of keystrokes, 
//where # denotes a backspace, return whether or not the sequences produce the same result.

// Ex: Given the following strings...

// s = "ABC#", t = "CD##AB", return true
// s = "como#pur#ter", t = "computer", return true
// s = "cof#dim#ng", t = "code", return false


function calculateString(str) {
    str = str.split('');
  for(var i=0 ; i< str.length ; i++) {
       if(str[i] === '#' && str[i-1] !== undefined) {
          str.splice(i-1,2);
           i -=2;
       } else if(str[i] === '#' && str[i-1] === undefined) {
           str.splice(i,1);
           i -= 1;
       }
   }
    return str.join('');
}
    
return calculateString(s) === calculateString(t);