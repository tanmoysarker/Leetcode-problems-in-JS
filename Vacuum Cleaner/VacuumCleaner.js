// Given a string representing the sequence of moves a robot vacuum makes, return whether or not it will return to its original position. The string will only contain L, R, U, and D characters, representing left, right, up, and down respectively.

// Ex: Given the following strings...

// "LR", return true
// "URURD", return false
// "RUULLDRD", return true

function vacuumCleaner(moves){    
    let x = 0,
        y = 0;
    
    for(let i = 0; i < moves.length; i++) {
      if(moves[i] === 'U') x++;
      else if (moves[i] === 'D') x--;
      else if (moves[i] === 'R') y++;
      else if (moves[i] === 'L') y--;
    }
    
    return x === 0 & y === 0 ? true : false;
  };
  vacuumCleaner('UR');