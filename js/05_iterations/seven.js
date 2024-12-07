const myNums = [1,2,3,4]

// const myTotal = myNums.reduce(function(acc, currVal){
//     console.log(`acc: ${acc} and current value ${currVal}`)
//     return acc+currVal

// }, 0)

const myTotal = myNums.reduce((acc, currVal) => (acc+currVal) , 0)

console.log(myTotal)

const shoppingCart = [
    {
        name: "js",
        price: 3180
    },
    {
        name: "python",
        price: 262
    },
    {
        name: "cpp",
        price: 5474
    },
    {
        name: "data science",
        price: 2351
    },
]

const totalPrice = shoppingCart.reduce((acc, course) => (acc+course.price), 0)
console.log(totalPrice)