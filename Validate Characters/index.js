// Given a string only containing the following characters (, ), {, }, [, and ] return whether or not the opening and closing characters are in a valid order.

// Ex: Given the following strings...

// "(){}[]", return true
// "(({[]}))", return true
// "{(})", return false


const isValid = (s) => {
    const stack = [];
    
    for (let i = 0; i < s.length; i += 1) {
      const top = stack[stack.length - 1];
      if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
        stack.push(s[i]);
      } else if (s[i] === ')' && top === '(' && stack.length !== 0) {
        stack.pop();
      } else if (s[i] === ']' && top === '[' && stack.length !== 0) {
        stack.pop();
      } else if (s[i] === '}' && top === '{' && stack.length !== 0) {
        stack.pop();
      } else {
        return false;
      }
    }
    
    return stack.length === 0;
  };