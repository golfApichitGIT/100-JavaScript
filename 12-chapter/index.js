const obj = {};
const hiddenKey = Symbol('hidden');

obj ['fullname'] = 'john';
obj[hiddenKey]= 'secret paassword';

for (const key in obj) {
    console.log(key);
    
}
console.log(Object.values(obj));
console.log(Object.entries(obj));
const s = (Object.getOwnPropertySymbols(obj));
const passwold = obj [s[0]];
console.log(passwold);

Object.getOwnPropertySymbols(obj).forEach(sym => {
    console.log(sym);
})

//const hiddenKey2 = Symbol('hidden2');
//const map = new Map();
//map.set(hiddenKey2, 'my password');

// ไม่นำ secret ออกไปเช่นเดียวกัน
console.log(JSON.stringify(obj));