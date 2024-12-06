const score = 400
const balance = new Number(3253.23554)
console.log(balance)
console.log(score)

console.log(balance.toString().length)
console.log(balance.toFixed(2))

const newNum = 353.3525
console.log(newNum.toPrecision(1)) // 4e + 2

const hundreds = 100000000
console.log(hundreds.toLocaleString('en-IN'))

// console.log(Number.MAX_VALUE)


// MATHS


console.log(Math.abs(-236))
console.log(Math.round(4.5))
console.log(Math.ceil(4.425))
console.log(Math.floor(4.425))

console.log(Math.random()) // between 0 and 1, both inclusive
console.log(Math.floor(Math.random()*10)+1) // between 0 and 1, both inclusive


const min = 1
const max = 6

console.log(Math.floor(Math.random() * (max-min+1)) + min)



