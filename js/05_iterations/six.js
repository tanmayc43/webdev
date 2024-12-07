const myNums = [1,2,3,4,5,6,7,8,9,10]

// const bigNums = myNums.map((key) => {
//     return key*10
// })

// console.log(bigNums)


const newNums = myNums.map((num) => num*10).map((num) => num+1).filter((num) => num<59)
// map chaining from left to right, calculated from left, passed to right
// here 1*10 = 10, 10 passed to right map, 10+1 = 11, returned into newNums
// similar follow up for right most filter
console.log(newNums)