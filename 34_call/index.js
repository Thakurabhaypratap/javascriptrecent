// call another function call in another function


function names(name , age){
    this.name = name;
    this.age = age;
    console.log(name);
}

function city (name , age , city){


    names.call(this ,  name, age);



    this.city = city;
    console.log(this.city);
}


// const nn = new names('abhay' , 21);

// console.log(nn);

const aa = new city ('abhay' , 66 , 'delhi' );
console.log(aa);





// second mathod call direct in console log syntex


// const person = {
//     fullName: function() {
//     return this.firstName + " " + this.lastName;
//     }
// }

// const person1 = {
//     firstName: "John",
//     lastName: "Doe"
// }

// const person2 = {
//     firstName: "Jane",
//     lastName: "Doe"
// }

//   // Using call() to invoke the fullName function with person1 and person2 objects
//   console.log(person.fullName.call(person1)); // Output: John Doe
//   console.log(person.fullName.call(person2)); // Output: Jane Doe



