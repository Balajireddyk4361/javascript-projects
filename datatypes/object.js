//a group of key value pairs as one entity 
// key:value EX: string:"balajireddy"

let emp={
   'ename':'balaji',
    'esal':233333,
    'eid':200,
    'loc':true,
    'get_details':function (){
        console.log('display information')
    }
}

console.log(emp)
ename='rahulreddy'
console.log(emp)
emp.email='balaireffy4361'
console.log(emp)

delete emp.eid;
console.log(emp)

emp.eid=10
console.log(emp)

emp.get_details()
eloc=true
console.log(emp.eloc)
emp.get_esal()