// Given two binary strings (strings containing only 1s and 0s) return their sum (also as a binary string).
// Note: neither binary string will contain leading 0s unless the string itself is 0

// Ex: Given the following binary strings...

// "100" + "1", return "101"
// "11" + "1", return "100"
// "1" + "0", return  "1"


// var addBinary = function(a, b) {
//     var dec = Number(parseInt(a, 2)) + Number(parseInt(b, 2));
//     console.log("the number a is " + parseInt(a, 2));
//     console.log("the number b is " + parseInt(b, 2));
//     console.log("the dec is  " + dec);
//     return dec.toString(2); 
// };
// var a = "10"
// var b = "110"
// console.log(addBinary(a, b));


// Another

function addBinary(a,b) {
    var i = a.length() - 1;
    var j = b.length() - 1;
    var carry = 0;
    while (i >= 0 || j >= 0) {
        var sum = carry;
        if (i >= 0) {
            sum += a.charAt(i--) - '0';
        }
        if (j >= 0) {
            sum += b.charAt(j--) - '0';
        }

        result.append(sum % 2);
        carry = sum / 2;
    }

    if (carry != 0) {
        result.append(1);
    }

    return result.reverse().toString();
}

addBinary("10","110");