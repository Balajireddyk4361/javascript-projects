let data={
    name:'baljai',
    id:101
}
// for (new_data in data){
//    // console.log(`${data[new_data]}:${new_data}`)
//    console.log(new_data ,":", data[new_data])
// // }


// using for of get keys only
for (let keys of Object.keys(data)){
    console.log(keys)
}

// using for of get only value
for (let values of Object.values(data)){
    console.log(values)
}


// get key and values both usin the for of 
for (let [key,value] of Object.entries(data)){
         //console.log(`${key}::${value}`)
         console.log(key  ,":" , value)
    }
    