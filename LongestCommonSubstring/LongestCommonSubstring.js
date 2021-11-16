// Given a string s, find the length of the longest substring without repeating characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.


var lengthOfLongestSubstring = function(s) {
    var max = 0, current_string = "", i, char, pos;

    for (i = 0; i < s.length; i += 1) {
        char = s.charAt(i);
        pos = current_string.indexOf(char);
        if (pos !== -1) {
            // cut "dv" to "v" when you see another "d"
            current_string = current_string.substr(pos + 1);
        }
        current_string += char;
        max = Math.max(max, current_string.length);
    }
    return max;

lengthOfLongestSubstring("dvdf"); // 3
};