let a = {
    name:'abhay',
    age:20,
    city:'delhi',
    country:'india',

    run :() =>{
        alert("Thakur Abhay!")
    },

    skills:['html','css','javascript'],
    hobbies:['football','basketball'],
    bio: 'I am <thakur abhay>, I am 20 years old, I live in Delhi, I am from India, I like html, css and javascript, I like football and basketball',
    image: '.images/abhay.jpg'
}
// console.log(a)
// console.log(a.name)
// console.log(a.image)




let p = {
    run2:() => {
        alert("Thakur MITISHA!")
    }
    
}


let c = {
    mommy: {
        name:'<sunita>',
        age:20,
        city:'delhi',
        country:'india',
        bio: 'I am <NAME>, I am 20 years old, I live in Delhi, I am from India, I like html, css and javascript, I like football and basketball',
        image: '.images/mommy.jpg'
    }
}


p.__proto__ = c

console.log(p.mommy);
console.log(p.mommy.name);


const b = a.run()
console.log(b)




// a.__proto__ = p
// console.log(a.run2);

// p.__proto__ = a
// console.log(p.run);






// Another mathod to create a prototype object


function creatuser ( name ,  age){
    this.name = name;
    this.age = age;
    this.city = 'delhi';
    this.country = 'india';
    this.bio = 'I am <NAME>, I am 20 years old, I live in Delhi, I am from India, I like html, css and javascript, I like football and basketball';
    this.image = '.images/mommy.jpg';
}


creatuser.prototype.create = function (){
    
    console.log(this.age+1);
}

creatuser.prototype.changename = function(){
    a = this.name ='shweta';
    console.log(a);
}



const user = new creatuser('sunita',20);
user.create()
user.changename()