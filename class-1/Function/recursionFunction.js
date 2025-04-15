// recursion---> function call itself 
//recursion is used to find a factorial value 
// 5!=5*4*3*2*1

/*function declare(num){
    if (num ===0 ) return 1;
    return num *  declare(num - 1)
 }
 console.log(declare(5))*/

// function call it self to do the task again and again until it done 
 //factorial value finding 
 let value =prompt ("enter number:")
 value=Number(value)
 
function declare(num){
  if (num ===0 ) return 1;
  return num *  declare(num - 1)
}
console.log( "factorial value",value,"of:",declare(value))


 