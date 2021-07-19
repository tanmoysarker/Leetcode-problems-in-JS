// Given a string representing your stones and another string representing a list of jewels, return the number of stones that you have that are also jewels.

// Ex: Given the following jewels and stones...

// jewels = "abc", stones = "ac", return 2
// jewels = "Af", stones = "AaaddfFf", return 3
// jewels = "AYOPD", stones = "ayopd", return 0




function jewelStones(jewels,stones){
    var arr = []
    for (let i = 0; i< stones.length ; i++){
        for (let j=0; j< jewels.length ; j++){
         if (stones[i] === jewels[j]){
            arr.push(jewels[j]);
        }
        }
    
    }
    return arr.length;
    }
    jewelStones("AYOPD" , "ayopd");
    

//Another one

var numJewelsInStones = function (J, S) {
    const set = new Set(J.split(""));
    let count = 0;
  
    for (let i = 0; i < S.length; i++) {
      if (set.has(S[i])) {
        count++;
      }
    }
  
    return count;
  };
  
  numJewelsInStones("abc" , "ac")
  