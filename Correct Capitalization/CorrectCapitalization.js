// Given a string, return whether or not it uses capitalization correctly. 
//A string correctly uses capitalization if all letters are capitalized, no letters are capitalized, or only the first letter is capitalized.

// Ex: Given the following strings...

// "USA", return true
// "Calvin", return true
// "compUter", return false
// "coding", return true


function correctCapitalization(str){
    if (str == str.toUpperCase()) {
  console.log('upper case true');
        return true;
     }else if ((str.substring(1) == str.substring(1).toLowerCase()) && (str.substring(0,1) == str.substring(0,1).toUpperCase()) ){
         return true;
     }else if (str == str.toLowerCase()){
        return true;
     }else return false;
 }
 correctCapitalization('coding');

 // Time complexity: O(n)
 // Space complexity: O(1)