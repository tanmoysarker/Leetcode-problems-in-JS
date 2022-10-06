function after5s(x){
    return new Promise(res => {
        setTimeout(() => {
            res(x);
        }, 5000);
    })
}


async function mult(input){
    const f = await after5s(3);
    const g = await after5s(4);
    return input * f * g;
}

mult(2).then(value => {
    console.log(value);
})

async function second_mult(input){
    const f =  after5s(3);
    const g =  after5s(4);
    return input * await f * await g;
}

second_mult(2).then(value => {
    console.log(value);
})

// What will be the output

// Ans: 24 after 5 seconds and after another 5 seconds, another 24


const samplePromise = () => Promise.resolve('A');

function f(){
    samplePromise().then(result => console.log(result));
    console.log('B');
}

async function g(){
    console.log(await samplePromise());
    console.log('B');
}

f();
g();

// What will be the output

// BA and AB

{/* <section>
    <p> Sentence 1 </p>
</section>

    <p> Sentence 2 </p>
    
section p {
    color: pink;
}

section + p {
    color: grey;
} */}

// What will be the output

// Sentence 1 will be pink, Sentence 2 will be gray


let arr = ['80', '70', '11', '88', '90', '61'];

function processInput(arr) {
  
  let initialValue = 0;
  let initialArray = [];
  
  arr.reduce((prev, current) => {
      if (current > 60){
          initialValue += 1;
          initialArray.push(initialValue);
      }else{
          initialValue = 0;
      }
  },0)
  
  const maxValue = Math.max(...initialArray);
  return maxValue;
}

const result = processInput(arr);
console.log(result);