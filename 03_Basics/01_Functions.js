function sayMyName(){
console.log("F");
console.log("a");
console.log("i");
console.log("z");
console.log("a");
console.log("n");
    
}

// sayMyName()

// function addTwoNumbers(number1,number2){ //Parameters
//     console.log(number1 + number2);

// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2 //other method
}
// const result = addTwoNumbers(4,5)

// console.log("Result:",result);

function loginUserMessage(username ="Faiz"){
    if(!username){
        console.log("enter your username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Faizan"))
// console.log(loginUserMessage("shaikh"))

function CalculateCartPrice(...num1){ //... are rest operator
    return num1
}
// console.log(CalculateCartPrice(200,400,500))

const user ={
    username:"Faizan",
    price:566
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    username: "Faiz",
    price:999

})


const myNewArray = [200,550,660]

function returnSecondValue(GetArray){
    return GetArray[0]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,550,660]));

