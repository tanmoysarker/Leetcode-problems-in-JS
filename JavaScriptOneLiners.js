const text = document.querySelector("h1");

text.textContent = Math.random() >= 0.5;

// it's gonna return true or false

const todos = ["Subscribe to developed", "check out courses",'fdfd'];
const socials = [
    "x@gmail.com",
    "youtube.com/@cdcsds",
    "twitter.com/csadsdsf",
    'fdfd'
]

const merge = [...socials, ...todos];
console.log(merge);

// ['x@gmail.com', 'youtube.com/@cdcsds', 'twitter.com/csadsdsf', 'fdfd', 'Subscribe to developed', 'check out courses', 'fdfd']

const merge = [...new Set([...socials, ...todos])];

// ['x@gmail.com', 'youtube.com/@cdcsds', 'twitter.com/csadsdsf', 'fdfd', 'Subscribe to developed', 'check out courses']


const user = {
    age: 27,
    tweets: 20,
    todo: ["the first sentence", "The second sentence"],
};

const { age, tweets, todo: [first, second]} = user;

console.log(first);

//the first sentence

//Generate random color 
const randomColor = Math.floor(Math.random() * 0xffffff).toString(16);


const user = 'sadsadsa';

const getUserData = () => {
    if (!user) return;

    const data = {
        name: 'dcsads',
        age: 28,
    }
    return data ;
}

console.log(getUserData());

//{name: 'dcsads', age: 28}


const videos = [
    {name: 'cdscds', views: 25000},
    {name: 'sdsdsf', views: 23000},
    {name: 'dssd', views: 27000},
];
console.table(videos);