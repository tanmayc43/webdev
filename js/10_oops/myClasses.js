// after ES6

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `223${this.password}325`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const user = new User("luke", "luke@gmail.com", "2366")

console.log(user.encryptPassword());
console.log(user.changeUsername());

// behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `223${this.password}325`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const user1 = new User("luke", "luke@gmail.com", "2366")

console.log(user1.encryptPassword());
console.log(user1.changeUsername());