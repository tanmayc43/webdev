const myObj = {
    JS : "JavaScript",
    Cpp : "C++",
    py : "Python"
}

//for in works for object and array, for of works for map
for (const key in myObj) {
    console.log(`Key for object is ${key} and it's value is ${myObj[key]}`)
}

