const fullname = 'Golf';
const age = 22;


//old way
const message = 'Hello: ' + fullname + 'age: ' + age;
console.log(message);

//new way
const message2 = `Hello ${fullname} age: ${age}`;
console.log(message2);

const message3 = `Hello ${fullname.toLocaleUpperCase()} age: ${age + 10}`;
console.log(message3);