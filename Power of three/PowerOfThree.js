var isPowerOfThree = function(n) {
    if( n == 0){
        return false
        
    }
    if(n == 1){
        return true
    }
    
    return isPowerOfThree(n/3)
};

//Another

var isPowerOfThree = function(n) {
    let exp = (Math.log(n) / Math.log(3)).toFixed(10);
    return exp % 1 === 0 ? true : false;
  };