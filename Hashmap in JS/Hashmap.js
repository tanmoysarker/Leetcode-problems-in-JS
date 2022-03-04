let firstHashmap = new Map();

let secondHashmap = new Map([
    [1, 'first'],
    [2, 'second'],
    [3, 'third']
]);

console.log('first hashmap size:', firstHashmap.size);
console.log('second hashmap size:', secondHashmap.size);
console.log('second hashmap get:', secondHashmap.get(2));
console.log('second hashmap has:', secondHashmap.has(3));
console.log('second hashmap set:', secondHashmap.set(4, 'fourth'));
console.log('second hashmap delete:', secondHashmap.delete(5));
console.log('second hashmap clear:', secondHashmap.clear());