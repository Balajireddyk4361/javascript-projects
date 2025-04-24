
// const Name="i am indian"
// const name1='i am'

// console.log(name1.concat(" ",Name))


// // print hello word in reverse with functions

// function ReverseString(str){
//     return str.split("").reverse().join("")
    
// }
// console.log(ReverseString("Hello"))


// //without function
// const str=' 1234567890'
//     console.log(str.split("").reverse().join(""))


// // without function reverse the chactor
//     function withoutreverse(str){
//         let reverse = "";
//         for( let i=str.length-1;i>=0;i--){
//             reverse += str[i]
//             console.log(str.length)
//         }
//         return reverse;
        
//     }
//     console.log(withoutreverse("chittoor"))


// // ibm names

// // function value(name){
// //     return name.substring(name.indexof('@'),name.length)
    
// // }
// // console.log('asfghjkl@bamabj')


// // function value(name){
// //     return name.substring(name.indexof('@'),+1)
    
// // }
// // console.log('asfghjkl@bamabj')






//  function numberreverse(num){
//    return String(num).split("").reverse().join("")
//  }
// console.log(numberreverse(1234567890))


// // find reverse array
// const numbers=[1,2,3,4,5,6,7,8,9,10]
  
function arraynumbers(num){
    let empty=[];
    for(i=num.length-1;i>=0;i--){
    empty.push(num[i])
}
return empty;

}
console.log(arraynumbers(numbers))





let nums=[1,2,3,4,5,6,7,8,9,0]


for(num in nums){
    console.log(num)
}



