// // Math built modulr
// console.log(Math.sqrt(12))
// //math(randam)
// console.log(Math.random()) // between 0 to 1
// console.log(Math.random()*100)  // values betwen 0 to 10

// // floor  => decrease to the nearest value
// console.log(Math.floor(5.9))
// // ceil => increase to the nearest value
// console.log(Math.ceil(5.4))
// // Round =>round a nerest value
// console.log(Math.round(5.1))
// //ABS => negitive value can convert to positive value
// console.log(Math.abs(-15))
// //pow => raise a base to the powerof an opponent
// console.log(Math.pow(2,3))
// //Max,min value =>to find maximam,minimam value
// console.log(Math.max(1,2,3,0,5))
// console.log(Math.min(1,2,3,0,5))
// //generate randam values without floating values
// console.log(Math.floor(Math.random()*10))
// // range between 10 to 50
// console.log(Math.floor(Math.random()*(50-10+1)+10))
// //Function 


//  //with return 
// //  let add= ()=>{
// //     return (Math.floor(Math.random()*(6-1+1)+1))
// //  }
// //  let a=add()
// //  console.log(a);
 
// function add(){
//     // console.log(Math.floor(Math.random()*(6-1+1)+1))
//    return Math.floor(Math.random()*(6-1+1)+1)
// }
// // add()
// let a=add()
// console.log(a);

//  //using return function 
// function fact(){
       
//     return Math.floor(Math.random()*10000-1)
//    }
//    let b=fact()
//    console.log(b)

//    console.log(Math.max(1,2,3,))



// how to get max and min number in number of arguments

// function facts(num){
//     let max=Math.max(...num)
//     console.log(`Maximam value:: ${max}`)

//     let min=Math.min(...num)
//     console.log(`Minimam value:: ${min}`)
// }
// facts([10,20,30,400,600,5,0,100])


// function device(){
//     return Math.floor(Math.random()*6)+1
    
// } 

// console.log(`random device value ${device()}`)
    
    



// //password generator
// let char="1234567890asdfghjklzxcvbnmasdfghjk123456"


// let password="";
// for (let i=0;i<=8;i++){
//     let randomPassword=Math.floor(Math.random()*char.length)
//     password += char[randomPassword]
// }
// console.log(`randomPassword :: ${password}`)


let nani="1234567890wertyuiopasdfghjklzxcvbnm"

let password="";

for(i=1;i<=6;i++){
  let run=Math.floor(Math.random()*nani.length)
  password += nani[ run]
    
}
console.log(` randompassword =>  ${password}`)



// random values in array
// let Names=['balaji','hari','sai','vasu','chai']

// let b=Math.floor(Math.random()*Names.length)

// console.log(Names[b])




// let Name=['Balaji','san','sai','google','going']

// function RandomNames(){
//     const RandomValues=Math.floor(Math.random()*Name.length)
//     console.log(Name[RandomValues])
// }
// RandomNames()




// print the even numbers and odd numbers at a one time bee
function even(){

    let a=Math.floor(Math.random()*(20-1)+1)
    if (a%2===0){
      console.log("even number",a)  
    }
    else{
        console.log("odd number",a)
    }
      
    }
    even()


    
    // print odd and even numbers in random values 

function GenerateRandomNumbers(max,min){
    let RandomValues=Math.floor(Math.random()*(max-min+1))+1
    if(RandomValues %2 ===0){
        console.log("Even nubers",RandomValues)
    }
    else{
        console.log("Odd Numbers",RandomValues)
    }
}
GenerateRandomNumbers(50,10)