// function sum(){
//     let total=0
//     for (let num of arguments){
//         total+=num}
//         return total
// }
// console.log(sum(10,20,30,40))


function sum(...arguments){
    let total=0
    for (let num of arguments){
        total+=num}
        return total
}
console.log(sum(10,20,30,40))


