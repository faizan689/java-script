//Reduced Array in Java Script Example;

// const array1= [1,2,3,4,5,6,7,8,9,10];
// const initiativeValue = 0;
// const sumWithintial = array1.reduce
// ((accumulator,currentValue)=> accumulator+currentValue, initiativeValue);
// console.log(sumWithintial);



 const myNums = [1,2,3,]

// const myTotal = myNums.reduce(function(acc,currval){
//     console.log(`acc:${acc} currval:${currval}`);
    
//     return acc + currval
   

// },0)

// console.log(myTotal);


const shoppingCart = [
    {
        itemName:"js course",
        price: 10054
    },
    {
        itemName:"py course",
        price: 18445
    },
    {
        itemName:"cpp course",
        price: 1045
    },
    {
        itemName:"java course",
        price: 4525
    },
]

const priceTOPay=shoppingCart.reduce((acc,item)=> acc +item.price,0)
console.log(Price);
