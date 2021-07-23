// Given two strings s and t return whether or not s is an anagram of t.
// Note: An anagram is a word formed by reordering the letters of another word.

// Ex: Given the following strings...

// s = "cat", t = "tac", return true
// s = "listen", t = "silent", return true
// s = "program", t = "function", return false

function anagrams(stringA, stringB) {
    /*First, we remove any non-alphabet character using regex and convert
    convert the strings to lowercase. */
    stringA = stringA.replace(/[^\w]/g, '').toLowerCase()
    stringB = stringB.replace(/[^\w]/g, '').toLowerCase()
    /*Next, we check if the lengths of the strings are equal.
    If they are anagrams, they will have the same length. */
    if (stringA.length !== stringB.length) {
        return false
    }

    let arrB = stringB.split("")

    for (let char of stringA ){ 
        if (!arrB.includes(char)) {
            return false
            break;
        } else {
            arrB.splice(arrB.indexOf(char), 1)
        }
    }

    return true

}
anagrams("silet", "listen")

// Another one

function anagrams(stringA, stringB) {
    /*First, we remove any non-alphabet character using regex and convert       
    convert the strings to lowercase. */
    stringA = stringA.replace(/[^\w]/g, '').toLowerCase()
    stringB = stringB.replace(/[^\w]/g, '').toLowerCase()

    return sortString(stringA) === sortString(stringB)
}

/*This function sorts the strings*/ 
function sortString(string) {
    return string.split('').sort().join('');
}

// *** Array.sort uses merge sort so its time complexity is O(nlogn).