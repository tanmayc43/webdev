// immediately invoked function expressions (iife)


// to solve the problem of pollution from global scope

// (function inside this)(execution for, put arguments here if any)
(function chai(){
    console.log(`DB connected`)
})() ; // semicolon needed to end context of this iife otherwise issues, next iife doesn't run

( function newChai(){
    console.log(`Chai done`)
})(); // semicolon needed

//above iife are NAMED IIFE for obvious reasons
//below are unnamed IIFE

(() => {
    console.log(`I asked for coffee tho`)
}) ();// empty function can be there

( (name) => {
    console.log(`${name} says chai better`)
})("tanmay")

//chai()