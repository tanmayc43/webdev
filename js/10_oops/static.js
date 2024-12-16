class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const user1 = new User("luke")
console.log(user1.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const sir = new Teacher("paidcodecamp", "pcc@google.com")
console.log(sir.createId());