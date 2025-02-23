const user = {
    username: "Faizan",
    price: 1123232,

    WelcomeMessage: function(){
        console.log(`${this.username},Welcome to website`);
        console.log(this);
    }
}
// user.WelcomeMessage()
// user.username = "k" //to change the username later
// user.WelcomeMessage()
// console.log(this);


// function coffee(){
//     let username ="Faizan" //the output will show undefine
    // console.log(this.username);
// }
// coffee()

// const coffee = function(){  //same output will be there
//     let username ="Faizan" 
//      console.log(this.username);
//  }
//  coffee()

// const coffee = ()=>{ //this is called arrow function
//     let username ="Faizan" 
//      console.log(this.username);//the output will be undefined
//  }
//  coffee()

// const addTwo =(num1,num2)=>{
//     return num1+num2//basic arrown function.
// }
// console.log(addTwo(3,4))


// const addTwo =(num1,num2)=> num1+num2//it is called implicit return.
const addTwo =(num1,num2)=> ({username:"faizan"}) //when we define object we have to give parenthesies. 




console.log(addTwo(3,4))
