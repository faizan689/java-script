const accountId = 144553
let accountEmail = "fsdc184@gmail.com"
var accountPassword = "12345"
accountCity = "vadodara"
let accountState;

//accountId = 2 // not allowed

accountEmail = "fs@gmail.com"
accountPassword = "211211121"
accountCity ="delhi"

console.log(accountId);

/* prefer not to use var 
because of issue in block scope and function*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
