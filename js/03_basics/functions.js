function Heisenberg(){
    console.log("Say my name")
    console.log("Say my name")
    console.log("Say my name")
    console.log("Say my name")
    console.log("Say my name")
    console.log("Say my name")
}

console.log(Heisenberg())

function adder(num1, num2){ // here num1, num2 are params
    console.log(num1 + num2)
    return num1 + num2
}

adder("asd", "sadg") // here these strings are the arguments
adder(4, null)
adder("3" + 4)

const res = adder(3,9)

console.log("Result is : " + res)

// (username = "default") -> syntax for default username
function loginUserMessage(username){
    if(!username){  // when !username is used, null is also treated like undefined
        return `You were supposed to give an username`
    }
    return `${username} just logged in bruv`
}

const msg = loginUserMessage(null) // null
const msg1 = loginUserMessage() // undefined
console.log(msg)
console.log(msg1)


function calculateCartPrice(...num1){ //(...num1) puts everything in an array -> num1 and returns it
    return num1
}

// function calculateCartPrice(val1, val2, val3, ...num1){ //(...num1) puts everything in an array -> num1 and returns it
//     return num1
// }  // first value taken by val1, second by val2, third by val3, rest by num1

console.log(calculateCartPrice(200,124,463,468,134))

const user = {
    username : "tanmay",
    age: 20,
    city: "Delhi"
}

function handleObject(anyobject){
    console.log(`User's name is ${anyobject.username} and his/her age is ${anyobject.age}.` )
    console.log(`The user lives in ${anyobject.city}`)
}

handleObject(user) // need to check typesafety manually here, otherwise undefined is returned
handleObject({
    username: "kanye",
    age: 47,
    city: "Milan"
})

const newArr = [200,235,466,643]

function returnSecondValue(newArr){
    return newArr[1]
}

console.log(returnSecondValue(newArr))


