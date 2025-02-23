//  primitive

// 7 types: String,Number,Boolean,null,Undefined,Symbol,BigInt

 const score = 23 //we dont define lang in js
 const scorevalue =100.3

 const isLoggedIn = false
 const outsideTemp =null
 let userEmail;  //we get undefined if we end w ;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber= 4523641545126584512265747545567n

// Refrence(Non primitive)

// Array, Objects,Functions

const heros = ["batman","superman","ironman"]
let myObj ={
    age:20,
    name:"Faiz",
}

const myFunction = function(){
    // console.log("Hello world");
}
// console.table(typeof Array);
// console.log(typeof Object);
// console.log(typeof Function);
// console.log(typeof anotherId);
// console.log(typeof myObj);
// console.log(typeof false);
// console.log(typeof isLoggedIn);
// console.log(typeof scorevalue);
//console.log(typeof outsideTemp);
//https://262.ecma-international.org/5.1#sec-11.4.3


//+++++++++++++++++++++++++++++++++++++++++++

//Stack primitive, Heap (Non-primitive)
let myinstaid = "iblamefaizann"
let anothername = myinstaid
anothername = "faizd0ntcare"


// console.log(myinstaid);
// console.log(anothername);

let userOne={
    email:"xyz@google.com",
    upi:"abc@ybl"
}
let userTwo = userOne

userTwo.email="faiz@google.com"
userTwo.upi="fsdc184@okaxis"

console.log(userOne.email);
console.log(userTwo.email);
