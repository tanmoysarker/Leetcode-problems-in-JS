// Given a string, return whether or not it uses capitalization correctly. 
//A string correctly uses capitalization if all letters are capitalized, no letters are capitalized, or only the first letter is capitalized.

// Ex: Given the following strings...

// "USA", return true
// "Calvin", return true
// "compUter", return false
// "coding", return true



//Not the solution though
var strings = 'MMM';
var i=0;
var character='';
while (i <= strings.length){
    character = strings.charAt(i);
    if (!isNaN(character * 1)){
        console.log('character is numeric');
    }else{
        if (character == character.toUpperCase()) {
            console.log('upper case true');
        }
        if (character == character.toLowerCase()){
            console.log('lower case true');
        }
    }
    i++;
}