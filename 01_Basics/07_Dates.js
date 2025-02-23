//Dates

let myDate = new Date()
// console.log(myDate.toDateString());
// console.log(myDate.toString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

let myCreatedDate = new Date(2004, 3 ,20)
// console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()

// console.log(myCreatedDate.getTime());
// console.log(myTimeStamp);

// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
let locale= 'en-IN';
// console.log(newDate);
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());

console.log(newDate.toLocaleString(locale, {
    weekday: "long",
    timeZone: 'Asia/kolkata'
}));
