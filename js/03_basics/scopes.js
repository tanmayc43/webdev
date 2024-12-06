// let a = 10
// const b = 20
// var c = 300

let a = 300

if(true){
    let a = 10
    console.log(a)
    const b = 20
    var c = 30
} //blockscope

// scope is different in browser console and in nodejs IDE

console.log(a)
//console.log(b)
console.log(c) // c still being printed even tho declared only in the block

//------------------------------------------------------------------------------------

// function one(){
//     const username = "tanmay"

//     function two(){
//         const website = "https://youtube.com"
//         console.log(username)
//     }
//     // console.log(website) // can't access inner scope
//     two() // closure ...?
// }

// one()

if(true){
    const username = "tanmay"
    if(username === "tanmay"){
        const website = "https://youtube.com"
        console.log(username +" "+  website)
    }
    //console.log(website)
}
//console.log(username)

addone(6) // works even before declaration of function because way of decalaration is different, basically normal

function addone(val){
    return val+1
}

// addtwo(7) -> doesn't work here, since the function is declared after this statement
const addtwo = function(num){
    return num + 2
} //function -> expression

addtwo(5) //works here

//execution context, hoisting