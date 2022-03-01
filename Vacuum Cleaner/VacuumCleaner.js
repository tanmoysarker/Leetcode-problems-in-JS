// Given a string representing the sequence of moves a robot vacuum makes, return whether or not it will return to its original position. The string will only contain L, R, U, and D characters, representing left, right, up, and down respectively.

// Ex: Given the following strings...

// "LR", return true
// "URURD", return false
// "RUULLDRD", return true

function vacuumCleaner (str){
    let x = 0;
    let y = 0;
    for(let i = 0; i < str.length; i++){
      if(str[i] === 'U'){
        x++;
      }else if(str[i] === 'D'){
        x--;
      }if (str[i] === 'R'){
        y++;
      }else if(str[i] === 'L'){
        y--;
      }
      
    }
    console.log(x , y);
    return x === 0 && y === 0 ? true : false ;
}

vacuumCleaner('RUULLDRD');

// Big-O Analysis
// Runtime: O(N) where N is the number of moves the vacuum makes
// Space complexity: O(1) or constant as we only need a few variables to solve the problem regardless of the number of moves the vacuum makes


