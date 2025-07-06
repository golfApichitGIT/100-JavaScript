//not good
const value = 0;
const result = value || 3000;
console.log("not good: " + result);

//good
const value2 = 0; //check null of nudefinde only
const result2 = value2 ?? 3000;
console.log("good: " + result2);


//good
let value3 = 0; //check null of nudefinde only
value3 ??= 3000;
console.log("good: " + value3);
