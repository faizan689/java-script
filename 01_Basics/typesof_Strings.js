//Multiline Strings

//const Food =`Iloves biryani.`;
//console.log(Food);

// use \n for new lines
// const Foodi = 'i loves biryani,\n but hates aloo in it\n also the ilaichi';
//console.log(Foodi);//It gives output in multiple lines

//Expression Evaluation.

// const a =34;
// const b =35;

//console.log(`The sum of a and b is: ${a +b}`);



/************** * 1. String Length:*****************/

// let str = "Hello";
// console.log(str.length);

/* ***********  3. Searching in Strings:************ */

// .indexOf():
// let str = "Hello world";
// console.log(str.indexOf("world"));

//.lastIndexOf():
// let str = "Hello world, world";
// console.log(str.lastIndexOf("world"));


// .includes():
// let str = "Hello world";
// console.log(str.includes("world"));  // Output: true

// .startsWith(): Checks if the string starts with a specific substring.
// let str = "Hello world";
// console.log(str.startsWith("Hello"));  // Output: true


// .endsWith(): Checks if the string ends with a specific substring.
// let str = "Hello world";
// console.log(str.endsWith("world"));  // Output: true



/************  4. Extracting Parts of a String   ************ */

//.slice(): Extracts a section of the string and returns it.
// let Kotha = "terimaarandi";
// const newStr=Kotha.slice(2,-7)
// console.log(newStr);  // Output: "rim"


// .substring(): Similar to .slice(), but does not accept negative indices.

// let str = "Hello world";
// console.log(str.substring(0, 5));  // Output: "Hello"

// .substr(): Returns a substring starting at a specified index and a specified length.
// let str = "Hello world";
// console.log(str.substr(6, 5));  // Output: "world"



/* ************** 5. String Replacement ************ */


// .replace(): Replaces the first occurrence of a specified substring with another substring
// let str = "Hello world";
// console.log(str.replace("world", "everyone"));  // Output: "Hello everyone"


// .replaceAll(): Replaces all occurrences of a specified substring with another.
// let str = "Hello world, world";
// console.log(str.replaceAll("world", "everyone"));  // Output: "Hello everyone, everyone"



/**************** 6. Whitespace Removal ******************/


// .trim(): Removes whitespace from both ends of a string.
 //let ughh = "  tmkc  ";
 //console.log(str.trim());  // Output: "tmkc"


// .trimStart() (or .trimLeft()): Removes whitespace from the beginning of the string
// let str = "  Hello world";
// console.log(str.trimStart());  // Output: "Hello world"


// .trimEnd() (or .trimRight()): Removes whitespace from the end of the string.
// let str = "Hello world  ";
// console.log(str.trimEnd());  // Output: "Hello world"




/***************** 7. String Padding **********************/


// .padStart(): Pads the string with another string (or a specified character) until it reaches a given length, from the start.
// let str = "5";
// console.log(str.padStart(4, "0"));  // Output: "005"


// .padEnd(): Pads the string with another string (or a specified character) until it reaches a given length, from the end.
// let str = "5";
// console.log(str.padEnd(3, "0"));  // Output: "500"


/****************  9. String Conversion ****************/

// .toString(): Converts a value to a string.
// let num = 123;
// console.log(num.toString());  // Output: "123"



/*****************  10. String Matching (Regex)*************/


// .match(): Retrieves the result of matching a string against a regular expression
// let str = "Hello world";
// console.log(str.match(/world/));  // Output: ["world"]


// .search(): Executes a regular expression search on the string and returns the index of the match, or -1 if no match is found.

// let str = "Hello world";
// console.log(str.search(/world/));  // Output: 6


/******************  11. String Normalization  ************/


// .normalize(): Returns the Unicode Normalization Form of a string, useful for working with characters that can be represented in multiple ways.
// let str = "é";
// console.log(str.normalize());  // Output: "é" (normalized form)


/***************  12. String Locale Comparison  ***********/


// .localeCompare(): Compares two strings in terms of local language settings (useful for sorting).


// let str1 = "apple";
// let str2 = "banana";
// console.log(str1.localeCompare(str2));  // Output: -1 (since "apple" is less than "banana")








/*****************  Summary of Key String Methods  ***********/


// Case conversion: .toUpperCase(), .toLowerCase()
// Searching: .indexOf(), .includes(), .startsWith(), .endsWith()
// Substring extraction: .slice(), .substring(), .substr()
// Replacement: .replace(), .replaceAll()
// Trimming: .trim(), .trimStart(), .trimEnd()
// Padding: .padStart(), .padEnd()
// Splitting and joining: .split(), .join()
// Matching and regex: .match(), .search()
// Normalization: .normalize()
// Locale comparison: .localeCompare()