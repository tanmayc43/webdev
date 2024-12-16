// let myName = " bruh     "
// let myChannel = "  something     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidey power is ${this.spiderman}`);
    }
}

Object.prototype.omniman = function(){
    console.log(`omniman is present in all objects`);
}

Array.prototype.heyThere = function(){
    console.log(`Omniman says hello`);
}

// heroPower.omniman()
// myHeros.omniman()
// myHeros.heyThere()
// heroPower.heyThere()

// inheritance

const User = {
    name: "adios",
    email: "adios@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = " paidcodecamp     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"sike   ".trueLength()
"  aig ht ".trueLength()