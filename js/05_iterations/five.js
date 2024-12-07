const f1Teams = ["Redbull", "Ferrari", "McLaren", "Mercedes", "Aston Martin"]

const vals = f1Teams.forEach((item) => {
    console.log(item)
})

const newVals = f1Teams.forEach((item) => {
    console.log(item)
    return item
})

console.log("break")
console.log(vals) // undefined, forEach doesn't return implicitly
console.log(newVals) // lmao, doesn't return even when explicity mentioned


const nums = [1,2,3,4,5,6,7,8]
const newNums = nums.filter( (num) => num>4)
const smallNums = nums.filter( (nums) => {
    let number = nums<=4
    return number
})  // explicit return need to be used if curly braces/ scope used



console.log(newNums)
console.log(smallNums)