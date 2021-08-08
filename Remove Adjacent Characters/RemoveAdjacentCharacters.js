// Given a string s containing only lowercase letters, continuously remove adjacent characters that are the same and return the result.

// Ex: Given the following strings...

// s = "abccba", return ""
// s = "foobar", return "fbar"
// s = "abccbefggfe", return "a"

function ShortenString(str1)
{
    var st = [];
    // Store the index of str
    var i = 0;
    // Traverse the string str
    while (i < str1.length)
    {    
        // Checks if stack is empty or top of the
        // stack is not equal to current character
        if (st.length==0 || str1[i] != st[st.length-1])
        {
            st.push(str1[i]);
            i++;
        }
             
        // If top element of the stack is
        // equal to the current character
        else
        {
            st.pop();
            i++;
        }
    }
     
    // If stack is empty
    if (st.length==0)
    {
        return ("Empty String");
    }
         
    // If stack is not Empty
    else
    {
        var short_string = "";
        while(st.length!=0)
        {
            short_string = st[st.length-1] +
                           short_string;
            st.pop();
        }
        return (short_string);
    }
}
 
// Driver Code
var str1 ="abccba";
ShortenString(str1);