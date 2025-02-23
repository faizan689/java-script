//for of loop


// ["" , "" ,""]
//[{},{},{}]

const arr =[1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
    
}

const greetings ="hello world"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

//Maps  // the map function is used to create a new array from an existing array or other iterable

const map = new Map()
map.set('name','John')
map.set('age',30)
map.set('city','New York')
//  console.log(map);

for (const [key , value] of map) {
    console.log(key, ':-',value);
}

// const: myObject = {
    // 'game': 'nfs',
    // 'year': 2020,//wont work in object like this
// }
// for (const[ key, value] of myObject){
//     console.log(key, ':-', value);
// }
    
