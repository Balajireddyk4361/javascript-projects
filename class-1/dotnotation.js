
//how to get keys in for of using 
const a={
    id:100,
    name:'balaji',
    loc:'ban'
}

// for(let [num] of Object.entries(a)){
//     console.log(num)
// }

for(let num in Object.entries(a)){
    console.log(num)
}