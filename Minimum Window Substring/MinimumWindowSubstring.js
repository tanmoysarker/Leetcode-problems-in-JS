// If the input strings are −

// const str1 = 'abcdefgh';
// const str2 = 'gedcf';
// Then the output should be −

// const output = 'cdefg';


const str1 = 'abcdefgh';
const str2 = 'gedcf';
const subIncludesAll = (str, str2) => {
   for (let i = 0; i < str.length; i++) {
      if (str2.indexOf(str[i]) !== -1) {
         str2 = str2.replace(str[i], '');
      };
   };
   return (str2.length === 0);
};
const minWindow = (str1 = '', str2 = '') => {
   let shortestString = null;
   for (let i = 0; i < str1.length; i++) {
      for (let j = i; j < str1.length; j++) {
         let testString = str1.substr(i, j-i+1);
         if (subIncludesAll(testString, str2)) {
            if (shortestString === null || testString.length < shortestString.length) {
               shortestString = testString;
            }
         }
      }
   }
   return shortestString;
};
console.log(minWindow(str1, str2));