const user={
    username: "tanmay",
    age: 20,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`)
        console.log(this); // entire object
    }
}

// user.welcomeMessage()
// user.username = "messi"
// user.welcomeMessage()

// console.log(this) // here in node ide, this refers to an empty object rn
// but in browser engine, global object is the window object

// function chai(){
//     let username = "tanmay"
//     console.log(this)
//     console.log(this.username) // undefined, doesnt work for functions, only in object context
// }

// chai()

const chai = () => {
    let username = "tanmay"
    console.log(this)
}
chai() // still returns empty when this and undefined when this.username


const addTwo= (num1, num2) => {
    return num1+num2
}
const betterAddTwo= (num1, num2) =>  (num1 + num2) //implicit return
// when curly braces are NOT used, return word need NOT be used but returning an object
// does require curly braces
// const objectReturn = (obj1, obj2) => ({username: "tanmay"})  // implicit return of object


console.log(addTwo(1094,1243))
console.log(betterAddTwo(235,4646))

const myArray = [14,436,6346,21]
// myArray.forEach(() => ())