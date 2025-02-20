let a = [1,5,3,9,11]

for (let index = 0; index < a.length; index++) {
    //const element = a[index];
    console.log(a[index])
}

a.forEach((value , index , a)=>{
    console.log(value, index, a)
})

let obj = {
    a:1,
    b:2,
    c:3
}

for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key, element)  
    }
}

for (const element of a) {
    console.log(element)
}
