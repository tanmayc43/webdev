const footballers = ["messi", "suarez", "neymar"]
const f1Teams =["Redbull", "Ferrari", "McLaren"]

// footballers.push(f1Teams)
// console.log(footballers)
// console.log(footballers[3][0]) // Redbull 

const newArr= footballers.concat(f1Teams) // returns new array after merging
console.log(newArr)

const better = [...f1Teams, ...footballers] // spread (like shards of glass ...)
console.log(better)

const anotherArray = [1,3,35,45,[32,426,246,[35632,235,2366]],68,758,5685]
const betterAnotherArray = anotherArray.flat(1) // can give Infinity, otherwise x means till x depth
console.log(betterAnotherArray)


console.log(Array.isArray("Tanmay"))
console.log(Array.from({name:"Tanmay"})) // interesting, if not able to convert, returns empty array
// have to declare whether arrays is to be made from key or value as such

let score1 = 3000
let score2 = 3525
let score3 = 4633

console.log(Array.of(score1,score2,score3))
