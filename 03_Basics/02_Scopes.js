let a =108
if (true) {
    let a = 104
    const b = 204
    var c = 304
    // console.log("INNER:",a);
}
//console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "faizan"

    function  two(){
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website); //output intentional errors

    two()

}
    one()


    if (true){
        const username = "Faizan"
        if(username ==="Faizan"){
            const website = " instagram"
            // console.log(username + website);
        }
        // console.log(website); //output intentional errors
    }

    // console.log(username);   //output intentional errors


    // ++++++++++++++++++ Intresting ++++++++++++++++

    console.log(addone(5));
    function addone(num){
        return num + 1 
    }
    const addtwo = function(num){
        return num+2
    }
    addtwo(5)