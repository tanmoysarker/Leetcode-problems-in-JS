// There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

// Example


// There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .

function sockMerchant(n, ar) {
    // Write your code here
    let count = 0;
    let newArr = ar.sort((a,b) => a - b)
    for ( let i = 0; i < ar.length; i++){
        if (newArr[i] === newArr[i+1]){
            i++;
            count++;
        }
    }
    return count;
}

// There is a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads and others are cumulus. The player can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus  or . The player must avoid the thunderheads. Determine the minimum number of jumps it will take to jump from the starting postion to the last cloud. It is always possible to win the game.

// For each game, you will get an array of clouds numbered  if they are safe or  if they must be avoided.

// Example



function jumpingOnClouds(c) {
    // Write your code here
    let jumps = 0;
    let ind = 0;
    do{
        jumps++;
        ind = c[ind + 2] == 0 ? ind + 2 : ind + 1
    }while(ind < c.length - 1);
    
    return jumps;
}

// There is a string, , of lowercase English letters that is repeated infinitely many times. Given an integer, , find and print the number of letter a's in the first  letters of the infinite string.
// Sample Input 0

// aba
// 10
// Sample Output 0

// 7
function repeatedString(s, n){
    let a = 0;
    const k = s.length;
    if (n >= k){
        for (const letter of s){
            if (letter === 'a') a++;
        }
        a *= Math.floor(n / k);
    }
    for (let ind = 0; ind < n %k; ind++){
        if(s[ind] === 'a') a++;
    }

    return a;
}

// An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly  steps, for every step it was noted if it was an uphill, , or a downhill,  step. Hikes always start and end at sea level, and each step up or down represents a  unit change in altitude. We define the following terms:

// A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
// A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
// Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.

// Example
// Sample Input

// 8
// UDDDUDUU
// Sample Output

// 1

 
function countingValleys(steps, path) {
    // Write your code here
   let valley = 0;
    let elevation = 0;
    for(let i = 0; i< steps; i++){
        if (path[i] === 'D'){
            elevation--;
        }else{
            if(elevation == -1){
                valley++;
            }
            elevation++
        }
        
    }
    return valley;
}

// A student is taking a cryptography class and has found anagrams to be very useful. Two strings are anagrams of each other if the first string's letters can be rearranged to form the second string. In other words, both strings must contain the same exact letters in the same exact frequency. For example, bacdc and dcbac are anagrams, but bacdc and dcbad are not.

// The student decides on an encryption scheme that involves two large strings. The encryption is dependent on the minimum number of character deletions required to make the two strings anagrams. Determine this number.

// Given two strings,  and , that may or may not be of the same length, determine the minimum number of character deletions required to make  and  anagrams. Any characters can be deleted from either of the strings.
// abcdefg
// abczy

// 2 * (5 - 3) + (7 - 5) = 4

function makeAnagram (a, b){
    const larger = a.length >= b.length ? a : b;
    const smaller = a.length < b.length ? a : b;

    const storage = {};

    for (const letter of larger){
        storage[letter] = (storage[letter] || 0) + 1;
    }

    let counter = 0;

    for (const letter of smaller){
        if (storage[letter] && storage[letter] > 0){
            storage[letter]--;
            counter++;
        }
    }

    const diff_of_smaller = (smaller.length - counter);
    const diff_of_larger = (larger.length - smaller.length);

    return (2 * diff_of_smaller) + diff_of_larger ;
}

// You are given a string containing characters  and  only. Your task is to change it into a string such that there are no matching adjacent characters. To do this, you are allowed to delete zero or more characters in the string.

// Your task is to find the minimum number of required deletions.

// s = AABAAB
// Remove an  A at positions 0 and 3 to make s = ABAB in 2 deletions.

function alternativeCharacters(){
    let result = 0;
 
    if (s.length >= 1 && s.length <= 100000) {
         let arr = s.split('');
         let past = arr[0];
         
         arr = arr.filter((item, key) => {
              if (item !== past && key !== 0) {
                   past = item;
                   return item; 
              }  
         });
         result = s.length - [ s.charAt(0), ...arr ].length;
    }
    
    return result; 
}