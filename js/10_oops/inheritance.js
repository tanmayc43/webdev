class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const teacher1 = new Teacher("SIR", "sir@sir.com", "123")

teacher1.logMe()
const teacher2 = new User("MA'AM")

teacher2.logMe()

console.log(teacher1 instanceof User);