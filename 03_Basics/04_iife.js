//Imediately Invoked Function Expression(IIFE)


(function connection(){
    console.log('DB Connected');

})();// ';'added to end the line

// (()=>{
//     // console.log('DB ConnectedTwo');

// })()

((name)=>{
    console.log(`DB ConnectedTwo ${name}`);

})('Faiz')
