/*
// singleton
// object literals
const symkey = Symbol("no1");
const obj1 = {
  name: "abhay",
  [symkey]: "no1", // this is a wey od define a symbol in array
  title: "thakur",
  father: " mr pramod",
  city: "gorakhpur",
  email: "zzxxcc6386@gmail.com",
};
console.log(obj1);
console.log(obj1.name); //mathod one to acces with key
console.log(obj1["name"]); // mathod 2
console.log(obj1[symkey]); // mathod for access symbol
console.log(obj1["symkey"]);
obj1.name = "ajit";
console.log(obj1);
Object.freeze(obj1); // this prototype mathod freez the full aobject and now we can not do any change
obj1.name = "miti";
console.log(obj1);



const obj2 = {
    name:"shweta",
    school:"anything",
    mummy: "sunita"
}

console.log(obj2)

obj2.fun1 = function(){
    console.log(`my name is , ${this.name}`)
}

console.log(obj2.fun1())


console.log("part 2")

const obj3 = {
    fullname:{
        name:{
            first_name:"thakur_abhay",
            middle_name:"pratap",
            title:"singh"
        }
    }
}

console.log(obj3);

const obj11 = {1:"a" , 2:"b" , 3:"c"}
const obj22 = {4:"d" , 5:"e" , 6:"f"}
const obj4 = {7:"g" , 8:"h" , 9:"i"}

const obj5 = {obj11 , obj22 , obj4} // this give 4 object

console.log(obj5);


const obj6 = Object.assign({} , obj11 , obj22 , obj4) // this give one object   {} curli breaces in starting because all value marge and go into first value
// console.log(obj6);


const obj10 = {...obj11 , ...obj22 , ...obj4}  // simple and easy way to mearge multi objects
console.log(obj10)


*/



const form =[
    {
        [id]:"1",
        email:"zz@gmail.com"
    },
    {
        [id]:"2",
        email:"hjghjcs@gmail.com"
    },
    {
        [id]:"3",
        email:"ftgsbcn@gmail.com"
    }

]

console.log(form)
console.log(form[1])
console.log(form[1].email)


console.log(Object.keys(form));
console.log(Object.values(form));
console.log(Object.entries(form));  // convert every object inti seprate array
console.log()



