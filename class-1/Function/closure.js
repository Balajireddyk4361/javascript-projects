// function outer(){
//     let count=0;
//     return function inner(){
//         count +=2
//         console.log(count)
//     }
// }
// let add = outer()
// add()
// add()
// add() 





// function backAccount(initialBalance){
//     let balance = initialBalance; //private variable

//     return {
//         deposit: function(amount){
//             balance += amount;
//             console.log(`Deposited : ${amount}, New Balance ${balance}`)
//         },
//         withDraw: function(amount){
//             if(amount > balance){
//                 console.log("Insufficent balance")
//             }else{
//                 balance -= amount;
//                 console.log(`withDrawn: ${amount}, Remaining Balance: ${balance}`)
//             }
//         },
//         checkBalance: function(){
//             console.log(`Current Balance: ${balance}`)
//         }
//     };
// }
// const myAccount = backAccount(500);
// myAccount.deposit(200);  //Deposited : 200, New Balance 700
// myAccount.withDraw(100);  //withDrawn: 100, Remaining Balance: 600
// myAccount.checkBalance()  //Current Balance: 600
// console.log(myAccount.balance)  //undifined  => (Cannot access private variable)





// // closures => Given you access to an outer function scope from an inner function
//  function outerFunction(){
//       let value = 'Hi Balaji reddy'
//      return function inner(a,b){
//      console.log(value)
//  }
//  }
//  const myfunction = outerFunction()

//  myfunction(10)
