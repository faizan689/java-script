const myObject={
    js: 'jscript',
    cpp:'c++',
    rb:"ruby",
    swift:"apple"
}

for (const key in myObject){
    // console.log(` ${key} shortcut is for ${myObject[key]} `);
    }
    
    
// array in for in loop

const programing =["js","rb","py","java","cpp"]

for (const key in programing) {
    console.log(programing[key]);
}

    //map is not iteratable in for in loop
