const userEmail = "something@something.com"

if(userEmail){
    console.log(`Got user email, which is, ${userEmail}`)
}
else{
    console.log(`Don't have user email`)
}

// falsy values
// NaN, null, -0, 0, false, BigInt, 0n, "", undefined

// truthy values
// "0", 'false', " ", [], {}, function(){} 

if(userEmail.length === 0){
    console.log(`array is empty`)
}

const obj = {
}

if(Object.keys(obj).length === 0){
    console.log(`empty object`)
}

// false == 0 -> true
// false == '' -> true
// 0 == '' -> true


// Nullish Coalescing Operator (??)  - for handling null, undefined
// different from ternary operator

let val1;
// val1 = 5 ?? 10  // 5 is assigned
// val1 = null ?? 10 // 10 is assigned
// val1 = undefined ?? 15 // 15 is assigned
val1 = undefined ?? 10 ?? 20 // 10 is assigned

console.log(val1)


// ternary operator

// condition ? true : false

const priceChai = 20

priceChai > 10 ? console.log("Ek Cutting") : console.log("Full cup")