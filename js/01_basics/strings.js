const name = "tanmay"
const repoCount = "4"

// console.log(name + repoCount)  -> old way

// below is string interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const userName = new String('tyci') // key value pair, o
console.log(userName[0])

console.log(userName.__proto__)
console.log(userName.length) // length is not a function
console.log(userName.toUpperCase())
console.log(userName.charAt('1'))

const director = new String("Christopher-Nolan")
const newDirector = director.substring(0,11) // negative DON'T work here
console.log(newDirector.toLowerCase())

const experiment = director.slice(-18, 12);
console.log(experiment.toLowerCase())


const badString = "    no ob    "
console.log(badString.trim())
console.log(badString)

const url = "https://tanmay.com/tanmay%20introduction"
const splitter = "messi-ronaldo-neymar"
console.log(url.replace('%20', '-'))
console.log(url.includes("messi"))

console.log(splitter.split('-'))
