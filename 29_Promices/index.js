/* This code snippet creates a new Promise object `promise2` with a callback function that takes two
parameters `resolve` and `reject`. Inside the callback function, it logs "abhay" to the console and
then calls the `resolve` function. */
const promise2 = new Promise( function(resolve, reject){
    console.log("abhay");
    resolve()
}).then(function(){
    console.log("okay");
});






/* This code snippet creates a new Promise object `promise3` with a callback function that takes two
parameters `resolve` and `reject`. Inside the callback function, it logs "abhay" to the console and
then checks the value of the variable `a`. If `a` is true, it calls the `resolve` function.
Otherwise, it calls the `reject` function with the error message 'error is there'. After that, it
attaches a `then` method to the promise object, which will be executed when the promise is resolved.
In this case, it logs "okay" to the console. */
const promise3 = new Promise( function(resolve, reject){
    console.log("abhay");
    a = true;
    if(a){

        resolve()
    }else{

        reject(' error is there')
    }
}).then(function(){
    console.log("okay");
});







const promise = new Promise(function(resolve, reject) {
    any = true;
    if(!any) {
        
        resolve({name : 'abhay',email : 'abhay@gmail.com',title : "singh"
    })
    }else{
        reject('error : this is error');
    }
    console.log('abhay');
})

promise.then(function(any){
    console.log(any.title);
}).catch()
promise.finally(function(){
    console.log('finnaly');  // finnaly is always run at any condition
})
promise.catch()

console.log(promise);







const promise4 = new Promise( function(resolve, reject){
    console.log("abhay");
    a = true;
    if(a){

        resolve({name : 'abhay',email : 'abhay@gmail.com',title : "singh"})
    }else{

        reject(' error is there')
    }
})





/* The code snippet is creating a Promise object `promise4` and chaining multiple `then` methods to it. */

promise4.then(function(user){  // it is acces all resolve items
    console.log(user);
    // console.log(user.name); // you can not do this 
}).then(function (any){
    console.log(any.name);
}).catch( function (err){
    console.log(err.message);
    console.log(err);
}).finally(function () {
    console.log('work done');
});







const promise5 = new Promise(function(resolve , reject){
    a = true;
    if(a){
        resolve( { username : 'abhay ', password : '123' } );

    }else{
        reject('  prommmese not resolve something error is there');
    }
})

async function asyncawaitpr5(){
    try{
        const aa = await promise5
        console.log(aa , aa.username );
    }catch(error2){
        console.log(error2);
    }
}


asyncawaitpr5()



const promise6 = new Promise(function(resolve , reject){
    a = true;
    if(a){
        resolve( { username : 'abhay ', password : '123' } );

    }else{
        reject('  prommmese not resolve something error is there');
    }
})

async function asyncawaitpr6(){
    try{
        const user = await promise6;
        console.log(user);
    }catch(err){
        console.log(err);
    }
}





async function fatchdata (){
    const respons1 = await fetch('https://jsonplaceholder.typicode.com/users')
    console.log(respons1);
    const aa = await respons1.json();
    console.log(aa);
    
}
fatchdata()



async function fatch1 (){
    try{
        const respons1 = await fetch('https://jsonplaceholder.typicode.com/users')
        console.log(respons1);
        const aa = await respons1.json();
        console.log(aa);
    }catch(err){
        console.log('this is error');
    }
}

fatch1()   






// best way to fatch data from api useing only then then always wait pro previous take wethout completing previous task the not go to other tasks


/* The code snippet is using the `fetch` function to make a GET request to the URL
`https://jsonplaceholder.typicode.com/users`. The `fetch` function returns a Promise that resolves
to the Response object representing the response to the request. */
fetch('https://jsonplaceholder.typicode.com/users').then(function(user){
    return user.json()
}).then(function(any1) {         // we useing againn then because paast then we are using return you can
    console.log(any1)
    return any1            // we can use multiple then useing return
}).then(function(any2) {
    console.log(any2[0]);
})
.catch(function(err){
    console.log(err);
})
.finally(function(){
    console.log("done")
})



    