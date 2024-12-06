// console.log(2>=1)
// console.log(2>1)
// console.log(1>2)
// console.log(2==1)
// console.log(2!=1)

console.log("2">1)
console.log("02">1) // unpredictable

console.log(null > 0) //f
console.log(null == 0) //f
console.log(null >= 0) //t 

// ==  and >,<,>=,<= work differently
// comparisons convert the data to number then compare
// whereas == don't do it 
// null get converted to 0 and then compared
// when >=,> comparison used

// undefined gives false with each comp with 0

// === is strict check, data type matters now
// no conversion when ===

console.log("2"===2)