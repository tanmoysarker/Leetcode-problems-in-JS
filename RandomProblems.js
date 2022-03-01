//Reverse
function reverse(str){
    const arr = str.split('');
    arr.reverse();
    return arr.join('');
}

//Find maximum characters in string

var getMax = function (str){
    var max = 0
    var maxChar = ''

    str.split('').forEach(char => {
        console.log(str.split(char));
        if (str.split(char).length > max){
            max = str.split(char).length;
            maxChar = char;
        }
    });
    return maxChar;
}

//Anagram

function getCharMap(str){
    let charMap = {}

    for (let char of str){
        charMap[char] = charMap[char] + 1 || 1
    }
    return charMap
}

function anagrams(strA, strB){
    strA = strA.replace(/[^\w]/g, "").toLowerCase();
    strB = strB.replace(/[^\w]/g, "").toLowerCase()

    const charMapA = getCharMap(strA);
    const charMapB = getCharMap(strB);

    for (let char in charMapA){
        if (charMapA[char] !== charMapB[char]){
            return false
        }
    }
    return true
}

//Recursion

function fib(n){
    if (n < 2){
        return n;
    }
    return fib(n-1) + fib(n-2);
}

//Array duplicates

function containDuplicates(a){
    for (let i = 0; i<a.length; i++){
        if(a.indexOf(a[i]) !== a.lastIndexOf(a[i])){
            return true;
        }
    }
    return false
}

// Contiguous maximum sum of subarray

var maxSubArray = function(nums) {
    let solution = nums[0];
   for (let i = 1; i < nums.length; i++){
       nums[i] = Math.max(nums[i], nums[i] + nums[i-1])
       solution = Math.max(solution, nums[i])
   }
   return solution;
};

// kth largest number in array

function findkthlargest (nums, k){
    nums.sort((a,b)=> {
        return a - b
    })

    return nums[nums.length - k];
}
//another
function Kth_greatest_in_array(arr, k) {

    for (let i = 0; i < k; i++) {
      let max_index = i;
      const tmp = arr[i];
  
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] > arr[max_index]) {
          max_index = j;
        }
      }
  
      arr[i] = arr[max_index];
      arr[max_index] = tmp;
    }
  
    return arr[k - 1];
  }
  
  console.log(Kth_greatest_in_array([1,2,6,4,5], 3))
  console.log(Kth_greatest_in_array([-10,-25,-47,-36,0], 1))

// Prime Number

function isPrime(num){
    for (let i = 2; i < num; i++){
        if(num% i ===0){
            return false;
        }
        return num > 1;
    }
}

// Prime number till 100

function display(n) {
    var arr = [2];
    for ( var i = 3; i < n; i+=2 ) {
        if ( isPrime(i) ) {
            arr.push(i);
        }
    }
    console.log(arr); // use arr result on your own
}

display(100);

// Shorten String


function ShortenString(str1)
{
    var st = [];
    var i = 0;
    while (i < str1.length)
    {    
        if (st.length==0 || str1[i] != st[st.length-1])
        {
            st.push(str1[i]);
            i++;
        }
        else
        {
            st.pop();
            i++;
        }
    }
     
    if (st.length==0)
    {
        return ("Empty String");
    }
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


// Fast and last index

var searchRange = function(nums, target) {
    if (nums.length === 0) return [-1, -1]
  
    let arr = []
    arr.push(nums.indexOf(target))
    arr.push(nums.lastIndexOf(target))
  
    return arr
  
  };

  // Memoize a function in js

  function myMemoize (fn, context){
      const res = {};
      return function(...args){
          var argsCache = JSON.stringify(args);
          if (!res[argsCache]){
              res[argsCache] = fn.call(context || this, ...args)
          }else {
              return res[argsCache]
          }
      }
  }

  // Call, bind, apply

  var person = {
      name: 'Tanmoy',
      hello: function(data){
          console.log(this.name + "says hello" + data)
      }
  }

  var newPerson = {
      name: 'Sarker'
  }

  person.hello.call(newPerson, 'world')

  // Promise

  function showText(text, time) {
      return new Promise((resolve, reject) => {
          setTimeout(() => {
              resolve(text);
          }, time);
      })
  }

  Promise.all(showText('hello',1000), Promise.resolve('hi'));



  // Debounce function

  const myDebounce = (cb, d) => {
      let timer;
      return function(...args) {
          if (timer) clearTimeout(timer);
          timer = setTimeout(()=> {
              cb(...args);
          }, d)
      }
  }

  const handleChange = myDebounce((e)=> {
      console.log(e.target.value);
  }, 1000);

  // Implement call

  const calc = {
      total: 0,
      add(a){
          this.total += a;
          return this;
      },
      multiply(a){
          this.total *= a;
          return this;
      },
      subtract(a){
          this.total -= a;
          return this;
      }
  }

  const result = calc.add(10).multiply(5).subtract(2)
  console.log(result.total);

  // forEach example

  const items = [
      { name: 'Rice', price: 5},
      { name: 'Book', price: 25},
      { name: 'Ckicken', price: 54},
      { name: 'Monitor', price: 53},
  ]

  let totalPrice = 0;
  items.forEach(item => {
      totalPrice += item.price
  })
  console.log(totalPrice) //gives the total price

  totalPrice = items.reduce((total, item)=> {
    return total + item.price
  }, 0)

  console.log(totalPrice) //gives the total price


  // syfe interview problem solution 

  const transform = (arr, primaryKey) => [...arr.reduce((map, { [primaryKey]: key, ...e }) => {
    const { [primaryKey]: k, ...props } = map.get(key) ?? {};
    for(let prop in e) {
      props[prop] = [...(props[prop] ?? []), e[prop]];
    }
    map.set(key, { [primaryKey]: key, ...props });
    return map;
  }, new Map).values()];