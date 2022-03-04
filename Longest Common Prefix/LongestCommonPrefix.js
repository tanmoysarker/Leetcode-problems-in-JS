// Given an array of strings, return the longest common prefix that is shared amongst all strings.
// Note: you may assume all strings only contain lowercase alphabetical characters.

// Ex: Given the following arrays...

// ["colorado", "color", "cold"], return "col"
// ["a", "b", "c"], return ""
// ["spot", "spotty", "spotted"], return "spot"


function longest_common_starting_substring(arr1){
    var arr= arr1.concat().sort(),
    a1= arr[0], a2= arr[arr.length-1], L= a1.length, i= 0;
    while(i< L && a1.charAt(i)=== a2.charAt(i)) i++;
    return a1.substring(0, i);
    }
    
// Another one
    var longestCommonPrefix = function(strs) {
        let prefix = ""
        if(strs === null || strs.length === 0) return prefix
    
        for (let i=0; i < strs[0].length; i++){ 
            const char = strs[0][i] // loop through all characters of the very first string. 
    
            for (let j = 1; j < strs.length; j++){ 
              // loop through all other strings in the array
                if(strs[j][i] !== char) return prefix
            }
            prefix = prefix + char
        }
    
        return prefix
    }


// function longestCommon(arr){
//     var str =''
//     for (let i = 0; i < arr[0].length(); i++){
//         var char = arr[0][i];
//         for (let j = 1; j<arr[i].length; j++){
//             if(arr[j][i] !== str) return str;
//         }
//         str = str + char
//     }
//     return str;    
// }