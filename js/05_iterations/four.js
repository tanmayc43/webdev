const f1Teams = ["Redbull", "Ferrari", "McLaren", "Mercedes", "Aston Martin"]

// f1Teams.forEach(function(item){
//     console.log(item)
// })

// f1Teams.forEach((item) => {
//     console.log(item)
// })

function printer(item){
    console.log(item)
}

//f1Teams.forEach(printer)

f1Teams.forEach((item, index, arr) => {
    console.log(item, index, arr)
})

const myTeams = [
    {
        sport: "Football",
        name: "FC Barcelona"
    },
    {
        sport: "F1",
        name: "Redbull Racing"
    },
    {
        sport: "Cricket",
        name: "Kolkata Knight Riders"
    },
    
]

myTeams.forEach((item)=>{
    console.log(item.name)
})