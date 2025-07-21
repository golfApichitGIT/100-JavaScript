// bad
let name = 'akenarin';
console.log(name); // ถ้าฝั่ง browser อาจจะไปชนกับ window.name

// good
const user = {
    name: 'john doe'
};
console.log(user.name);
