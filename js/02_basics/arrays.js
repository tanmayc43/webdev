// arrays are resizeable, mix data type

const myArr = [0,1,2,3,5,6] // copies are shallow copy
console.log(myArr[0])

const arr = new Array(214,34235,6745,573)
console.log(arr[0])

//array methods

// myArr.push(25)
// myArr.push(26)
// myArr.pop()

myArr.unshift(9) // O(n) operation
myArr.shift() // removes 1st element
console.log(myArr)

const newArr = myArr.join() // becomes string
console.log(typeof myArr)
console.log(typeof newArr)

console.log("A ", myArr)
const myn1 = myArr.slice(1,4) // slice doesnt change original array, works like substring 
console.log(myn1)
console.log("B ", myArr)

const myn2 = myArr.splice(1,4); // splice literally cuts the array, including both start and end
console.log(myn2)
console.log("B ", myArr)