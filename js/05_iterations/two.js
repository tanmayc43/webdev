//for of

const arr = [1,24,4,46,23,6]
const greeting= "Good Morning"
for (const it of arr) {  //literally object
    console.log(it)
}

for(const it of greeting){
    console.log(`letter is ${it}`)
}


// Maps

const map = new Map()
map.set('IN', "India")
map.set('FR', "France")
map.set('NL', "Netherlands")

console.log(map)

for (const [key, value] of map) {
    console.log(key , " : ", value)
}

const myObj = {
    game1 : "forza horizon 5",
    game2 : "F1 22"
}

// for (const [key, val] of myObj) {
//     console.log(key,  " - ", val)
// } // object not iterable like this