const user = {
    username : "abhay",
    price : 9999,
    welcomemassage: function(){
        console.log(`${this.username}`)
        console.log(this)
    }
}


user.welcomemassage()
user.username = "sam"
// console.log(user())
console.log(this);
