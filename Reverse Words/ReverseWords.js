// Problem: Reverse the whole string with words

function reverseWords(str){
    var s = str.split('')
    // s = ["i", "like", "this", 
    //      "program", "very", "much"];
                                          
var ans ="";
for (var i = 5; i >= 0; i--)
{
    ans += s[i] + " ";
}

console.log(ans.slice(0,ans.length-1));
}