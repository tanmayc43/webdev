// dates are calculated in ms from jan 1st, 1970
// Temporal is proposed to become a global object

let myDate = new Date() // object
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleDateString())

let newDate = new Date(2024, 2, 24, 42, 3, 31) //wrapping, 24 + 18, month starts from 0
//when declaring date in "2024-01-24", month starts from 01
console.log(newDate.toLocaleString())

newDate = ("2024-03-12")

let myTimeStamp = Date.now()
console.log(myTimeStamp)
//console.log(newDate.getTime())
console.log(Math.floor(Date.now()/1000))


let yesDate = new Date()
console.log(yesDate.getMonth()) // 0 indexing

console.log(newDate.toLocaleString('default',{
    weekday: "long",
    dateStyle: "medium"
}))

