// singleton -> when made by constructors, when by literals - not singleton

// object literals

const mySym = Symbol("key1")

const JsUser={
    "full name": "Tanmay Chaturvedi", // key is by default taken to be a string
    [mySym]: "myKey1", //to use as symbol data type, [] is important, otherwise used like string
    age: 20,
    city: "Delhi",
    email: "tanmay@gmail.com",
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym]) // symbol can be accessed by [] only

JsUser.email = "tanmay@google.com"
//Object.freeze(JsUser)
JsUser.city = "Hyderabad"

console.log(JsUser)

JsUser.greeting = function(){
    console.log("I am a JS user")
}
JsUser.greetingTwo = function(){
    console.log(`My name is ${this["full name"]} and I don't live in ${JsUser.city}`)
}

console.log(JsUser.greetingTwo)
console.log(JsUser.greetingTwo())
