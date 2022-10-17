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