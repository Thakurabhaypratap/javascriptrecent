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


const user2 = function(){
    username2 = "ajit2"   
    console.log(this.username2); // not let or const this can acces
}

user2()

function user3(){
    let username3 = "ajit3" 
    console.log(this.username3);
}

user3()


function user4(){
    let username4 = "ajit4"
    console.log(this.username4);
}

user4() // we cannot access




function user5(){
    username5 = "ajit5"
    console.log(this.username5);   // this . access inside function it can access in the object
}

user5() // it can access because ve not use  let const or var

