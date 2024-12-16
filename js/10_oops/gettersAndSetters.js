class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}noooooooooo`
    }

    set password(value){
        this._password = value
    }
}

const sike = new User("am@chrono", "abc")
console.log(sike.email);