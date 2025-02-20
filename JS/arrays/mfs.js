let arr2 = [1,3,25,7,2,11];

// let newArr = []
// for (let index = 0; index < arr.length; index++) {
//    const element = arr[index];
//    newArr.push(element**2) 
// }

// map()
let newArr = arr2.map(e=>{ 
    return e**2
})
console.log(newArr)


// filter()
const greaterThanSeven = (e)=>{
    if(e>7){
        return true
    }
    return false
}
console.log(newArr.filter(greaterThanSeven))


// reduce method
let arr3 = [2,4,6,8,10]

const sum = (a,b)=>{
    return a+b
}
console.log(arr3.reduce(sum))
