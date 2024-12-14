const promiseOne = new Promise(function(resolve,reject){
    //do an async task
    //db calls, cryptography, network
    setTimeout(function(){
        console.log('async task is complete')
        resolve()
    }, 2000)
})

promiseOne.then(function(){
    console.log('promise consumed');
}) // task is always completed first then promise is consumed

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async task 2 done');
        resolve()
    },2000)
}).then(function(){
    console.log('promise 2 done')
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve({
            username: "james hunt",
            email: "something@nothing.com"
        })
    }, 1000);
})
//resolve is directly connected with then
//able to send data as params

promiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve(
            {username: " yes ",
             password : "no1234"})
        }
        else {
            reject("error : something went terribly wrong")
        }
        
    })
})

promiseFour.then(function(user){
    console.log(user);
    return user.username
}).then((username) =>{
    console.log(username);
}).catch(function(e){
    console.log(e)
}).finally(function(){
    console.log('the promise is either resolved or rejected');
})//then chaining


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve(
            {username: " adios ",
             password : "hola!"})
        }
        else {
            reject("error : sorry, password too weak")
        }
        
    })
})

async function consumePromiseFive() {
    try{
        const response = await promiseFive
        console.log(response)
    }
    catch(e){
        console.log(e)
    }
} // doesn't directly handle errors without try-catch

consumePromiseFive()


fetch('https://api.github.com/users/tanmayc43')
.then((response) => {
    return response.json()
}).then((data) => {
    console.log(data)
})
.catch((e) =>{
    console.log('error occured : ' + e)
}).finally(
    console.log('promise either completed or not')
)