// const tinderUser = new Object()  -> singleton obj
// const tinderUser = {}  -> non singleton obj

const tinderUser = {}

tinderUser.id = "124fs"
tinderUser.name = "Viktor"
tinderUser.isLoggedIn = true

const regularUser = {
    email: "something@something.com",
    fullname: {
        userFullName:{
            firstname: "Viktor",
            lastname: "Axelsen"
        }
    },
    city: "someplace"
}

console.log(regularUser.fullname?.userFullName.firstname)

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};

const obj3 = Object.assign({}, obj1, obj2) // assign -> target,source
// therefore to take empty object as target
console.log(obj3)

const obj4 = {...obj1, ...obj2} // best
console.log(obj4)

const users = [
    {
        id: 1,
        email: "hello@something.com"
    },
    {

    },
    {

    },
]

console.log(users[0].email) //array of object can be accessed like this

console.log(tinderUser)
console.log(Object.keys(tinderUser)) // gives array of objects (keys)
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser)) // key-value pairs in array

console.log(tinderUser.hasOwnProperty("isLoggedIn")) // true
console.log(tinderUser.hasOwnProperty("isLockedIn")) // false



//------------------------------more about objects--------------------------------------------------

const footballer = {
    pace : 99,
    dribbling : 102,
    shooting: 100,
    passing: 93,
    defending:82,
    physical: 90
}

const {dribbling: drib} = footballer // object de-structuring
const {passing} = footballer
console.log(drib)
console.log(passing)

// {
//     "name" : "viktor",
//     tournament: "Denmark open",
//     age: 23
// }  //json format


// api can return object as well as array



