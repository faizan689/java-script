/*********  singleton  **************/
 //when we declare as literal it does not form singleton
 //it will be single ton incase of constructor


 //object literals

 const mysym=Symbol("key1")
 const JsUser ={
    name: "Faiz",
    [mysym]:"key1",
    age:20,
    location:"delhi",
    email:"faiz@gmail.com",
    isLoggedIn: false,
    lastloginDays:["sat","mon"]
 }

//    console.log(JsUser.isLoggedIn);
//    console.log(JsUser[mysym]);
  
   
//    if we want to make value unchangable we use this:
    
     JsUser.email = "faiz1@gmail.com"
     //Object.freeze(JsUser) //we use this to freeze value like it cannot be changed after this
     //for example
     JsUser.email = "faiz2@gmail.com"
    //  console.log(JsUser);


    JsUser.greeting = function(){
        console.log("Welcome Faizan sir");
    }
    JsUser.greetingTwo = function(){
        console.log(`Welcome Faizan sir, ${this.name}`);
    }

    console.log(JsUser.greeting());
    console.log(JsUser.greetingTwo());

     