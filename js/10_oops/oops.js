const user = {
    username : "neymar", 
    loginCount : 1,
    signedIn : true,

    getUserDetails : function(){
        // console.log('data retrieved')
        // console.log(`${username}`) // gives error because context is not defined

        // console.log(`${this.username}`) // works

        console.log(this)
    }
}

//console.log(user.username)
//console.log(user.getUserDetails())


//constructor function
