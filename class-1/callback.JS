// promis Example

const data=new Promise((resolve, reject) => {
    let success=true
    if(success){
        resolve('success')
    }
    else{
        reject('fail')
    }
})
console.log(data)

.then(msg  => console.log(msg) )
.catch(value => console.group(value))


//multiple APS
/*
. all
. allsetrelled
. race
.any*/

