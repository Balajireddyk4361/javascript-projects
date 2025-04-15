// json has two built in methods
// 1)stringfy ==>object to string
//2) parse  ==> string to object

const data={ eid:100, 
             ename:"balaji",
             esal:true
            }
     

let string=JSON.stringify(data)
console.log(string)

let parse=JSON.parse(string)
console.log(parse)

