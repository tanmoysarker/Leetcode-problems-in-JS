// Given a string and the ability to delete at most one character, return whether or not it can form a palindrome.
// Note: a palindrome is a sequence of characters that reads the same forwards and backwards.

// Ex: Given the following strings...

// "abcba", return true
// "foobof", return true (remove the first 'o', the second 'o', or 'b')
// "abccab", return false


function isPalindrome(str,low, high)
{
    while (low < high)
    {
        if (str.charAt(low) != str.charAt(high))
            return false;
        low++;
        high--;
    }
    return true;
}
function possiblePalinByRemovingOneChar(str)
{

    // Initialize low and right
    // by both the ends of the string
    var low = 0, high = str.length - 1;

    // loop untill low and
    // high cross each other
    while (low < high)
    {

        // If both characters are equal then
        // move both pointer towards end
        if (str.charAt(low) == str.charAt(high))
        {
            low++;
            high--;
        }
        else
        {

            /*
            * If removing str[low] makes the
            * whole string palindrome. We basically
            * check if substring str[low+1..high]
            * is palindrome or not.
            */
            if (isPalindrome(str, low + 1, high))
                return low;

            /*
            * If removing str[high] makes the whole string
            * palindrome. We basically check if substring
            * str[low+1..high] is palindrome or not.
            */
            if (isPalindrome(str, low, high - 1))
                return high;
            return -1;
        }
    }

    // We reach here when complete string
    // will be palindrome if complete string
    // is palindrome then return mid character
    return -2;
}

function validPalindromeRemoval (str) { 
    var idx = possiblePalinByRemovingOneChar(str);

    if (idx == -1){
        console.log("Not Possible");
    }else if (idx == -2){
        console.log("Possible without " +
                      "removing any character");
    }else{
        console.log("Possible by removing" +
                           " character at index " + idx);
    }
}
validPalindromeRemoval("foobof");
