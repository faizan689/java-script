// const tinderuser = new Objects{} //Singleton
const tinderUser = {}  //NOn-Singleton

tinderUser.id = "Faiz@123"
tinderUser.name = "Faizan"
tinderUser.isLoggedin = false


// console.log(tinderUser);

const regularUser ={
    email: "Faizan@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Faizan",
            lastname: "Shaikh",


        }
    }

        }

// console.log(regularUser.fullname.userfullname.lastname);
 
const obj1 = {1: "c" ,2: "d"}
const obj2 ={3: "a",4: "b"}
const obj4 ={5: "a",6: "b"}
// const obj3 = {obj1, obj2}
// const obj3 =Object.assign({},obj1,obj2,obj4)

const obj3 ={...obj1,...obj2} // most commonly used in js
// console.log(obj3); 

// const users = [
//     {
//         id: 1,
//         email  :"f1s@gmail.com"
//     },
//     {
//         id: 1,
//         email  :"f1s@gmail.com"
//     },
//     {
//         id: 1,
//         email  :"f1s@gmail.com"
//     },
// ]

//  users[1].email
 console.log(tinderUser);

 console.log(Object.keys(tinderUser)); //imp
 console.log(Object.values(tinderUser)); //imp
 console.log(Object.entries(tinderUser)); //imp

 console.log(tinderUser.hasOwnProperty('isLoggedin'));



/******* Destructuring  ************/


const course ={
    coursname:"js w Faizan",
    price:"69",
    courseInstructor:"Faizan"
}
// course.courseInstructor

const{courseInstructor:Instructor} = course
// console.log(courseInstructor);
console.log(Instructor);


/* FOR REACT */
// const navbar =({company}) ==>{ 

// }
// navbar(company ="Faizan") //for destructuring in object in react

   /* API */

// {
//     name:"faizan"
//     coursname: "Js "
//     price: "495"
// }



//Api's are in json format
[
    {},
    {},
]





