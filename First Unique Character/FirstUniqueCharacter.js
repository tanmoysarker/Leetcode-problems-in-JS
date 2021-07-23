// Given a string, return the index of its first unique character. If a unique character does not exist, return -1.

// Ex: Given the following strings...

// "abcabd", return 2
// "thedailybyte", return 1
// "developer", return 0


var firstUniqChar = function(s) {
    var chars = s.split('');
    for (var i = 0; i < s.length; i++) {
      if (chars.filter(function(j) { 
       return j == s.charAt(i)
      }).length == 1) {
       return i
      }
    }
     return -1
  };
  firstUniqChar('abcdab')

  // Another one

  var firstUniqChar = function(s) {
    for (i=0; i < s.length; i++) {
      if (s.indexOf(s[i]) == s.lastIndexOf(s[i])) {
        return i
      }
    }
   return -1
}