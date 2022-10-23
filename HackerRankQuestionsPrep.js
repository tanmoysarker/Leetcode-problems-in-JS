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

// Sherlock considers a string to be valid if all characters of the string appear the same number of times. It is also valid if he can remove just  character at  index in the string, and the remaining characters will occur the same number of times. Given a string , determine if it is valid. If so, return YES, otherwise return NO.

function isValid(s) {
    let hash = {};
    let max, min;
    let minCount = 0;
    let maxCount = 0;
    
    //Get frequencies of characters
    for (let i = 0; i<s.length; i++){
        let key = s[i];
        if(hash[key]){
            console.log(hash);
            hash[key]++;
        }else{
            hash[key] = 1;
        }
    }
        //Push all strings to an array
        let frequencies = Object.values(hash);
        frequencies.sort();
        min = frequencies[0];
        max = frequencies[frequencies.length - 1];
        console.log(frequencies);
        
        // Get the number of max and in for the frequency
        for(let i = 0; i < frequencies.length; i++){
            if(frequencies[i] === max){
                maxCount++;
            }
            if(frequencies[i] === min){
                minCount++;
            }
        }
          console.log('min',minCount);
          console.log('max',maxCount);
        if (min === max){
            return 'YES';
        }
        if (max - (min - 1) == max && minCount === 1 && maxCount !== 1){
            return 'YES';
        }
        if (max - min !== 1){
            return 'NO';
        }
        if (minCount === maxCount){
            return 'NO';
        }
        if (minCount === 1 || maxCount === 1){
            return 'YES';
        }
        return 'NO'
    
}
isValid('abcc');



// A string is said to be a special string if either of two conditions is met:

// All of the characters are the same, e.g. aaa.
// All characters except the middle one are the same, e.g. aadaa.
// A special substring is any substring of a string which meets one of those criteria. Given a string, determine how many special substrings can be formed from it.

// s= mnonopoo
// Output =  {m, n, o, n, o, p, o, o, non, ono, opo, oo}


function substrCount(n, s) {
    let result = 0;
     let i = 0;
     // 1st case, all letters are the same
     while(i < n) {
         let charCount = 1;
         while (i + 1 < s.length && s[i] == s[i+1]) {
             
             i++;
             charCount++;
         }
     console.log('charCount',charCount)
         result += parseInt((charCount * (charCount + 1)) / 2);
         console.log(result)
         i++;
     }
     // 2nd case, palindrome
     for (i=1; i<n; i++) {
         let charCount = 1
         while (
             i + charCount < s.length &&
             i - charCount >= 0 &&
             s[i-1] != s[i] &&
             s[i-1] == s[i-charCount] &&
             s[i-1] == s[i+charCount]
         ) {
             charCount ++;
         }
    
         result += charCount - 1
     }
     return result
    }
    
    substrCount(4, 'aaaa');

    // A string is said to be a child of a another string if it can be formed by deleting 0 or more characters from the other string. Letters cannot be rearranged. Given two strings of equal length, what's the longest string that can be constructed such that it is a child of both?

    function commonChild(s1, s2) {
        const lcs = []
        for (let i = 0; i< s2.length + 1; i++){
            lcs.push(new Array(s1.length + 1).fill(0));
        }
        
        for ( let i = 1; i < s1.length + 1; i++ ){
            for (let j = 1; j < s2.length + 1; j++){
                if(s1[i -1] === s2[j - 1]){
                    lcs[i][j] = lcs[i-1][j-1] + 1
                }else {
                    lcs[i][j] = Math.max(lcs[i - 1][j], lcs[i][j - 1])
                }
            }
        }
        return lcs[s1.length][s2.length]
    }


//     Harold is a kidnapper who wrote a ransom note, but now he is worried it will be traced back to him through his handwriting. He found a magazine and wants to know if he can cut out whole words from it and use them to create an untraceable replica of his ransom note. The words in his note are case-sensitive and he must use only whole words available in the magazine. He cannot use substrings or concatenation to create the words he needs.

// Given the words in the magazine and the words in the ransom note, print Yes if he can replicate his ransom note exactly using whole words from the magazine; otherwise, print No.
   
function checkMagazine(magazine, note) {
        // Write your code here
         let result = 'Yes';
         for (let i = 0; i < note.length; i++){
             const index = magazine.indexOf(note[i]);
             if (index === -1){
                 result =  'No';
                 break;
             }else {
                 magazine.splice(index, 1);
             }
         }
         console.log(result);
    }

    // Given two strings, determine if they share a common substring. A substring may be as small as one character.

    function twoStrings(s1, s2) {
        // Write your code here
         let result = "NO";
         const s1len = s1.length;
         const s2len = s2.length;
         if (s1len >= 1 && s2len >= 1) {
              
              result = (s1.split('')
                       .filter((el, key) => s2.indexOf(el) > -1)
                       .length > 0) ? "YES" : "NO";
         }
         return result;
    }