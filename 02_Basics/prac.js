// const mysmb= Symbol("key1")
// const JsUser ={
//     [mysmb]:"key1"};

// console.log(typeof JsUser[mysmb]);

const target = {a: 1, b: 2};
const source = {b: 4, c: 5};

const returnedTarget = object.assign(target, source);

console.log(target);
console.log(returnedTarget === target);
