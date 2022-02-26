function reverseStr (str){
    var revStr = '';
    for (let i = str.length - 1; i >= 0; i--){
        revStr += str[i];
    }
    return revStr;
}
reverseStr('Cat');

//Another

function reverseStr (str){
    var revStr = str.split(' ').reverse().join()
    return revStr;
}
reverseStr('Cat');