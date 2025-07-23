// old way
const fruits = ['apple', 'banana'];
// console.log(fruits.indexOf('apple'));
if (fruits.indexOf('apple') !== -1) {
    console.log('hello apple');
} else {
    console.log('apple is not found');
}

// new way (good)
console.log('----includes----');
console.log(fruits.includes('apple')); // true or false
if (fruits.includes('apple')) {
    console.log('hello apple');
} else {
    console.log('apple is not found');
}

// ร่วมกับ filter()
const fruitsToCheck = ['apple', 'banana', 'cherry', 'mango'];

let filterFruits = fruitsToCheck.filter(f => fruits.includes(f));
console.log(filterFruits);