// for of Loop
arr1 = ["abhay" ,"ajit" , "sinita" , "shweta"]
for (const any of arr1) {
    console.log(any);
};


const greetings = "Hellow Thakur Abhay"
for (const any of greetings) {
    console.log(`Each Charector oF greetins is :- ${any}`);
    
}

//Maps always store uniqu value (not store duplicae value) and arrange as same form like as code 

// The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

const any = new Map()
any.set('IN' , 'india')
any.set('IN' , 'india') //will not be print becasuse it is a duplicate vale and map not store duplidcae value
any.set('usa' , 'amrica')
any.set('fr' , 'france')
console.log(any);
console.log(any.get("IN"));
// Expected output: india


const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1.get('a'));
// Expected output: 1

map1.set('a', 97);

console.log(map1.get('a'));
// Expected output: 97

console.log(map1.size);
// Expected output: 3

map1.delete('b');

console.log(map1.size);
// Expected output: 2




// for of , for in loop with map and objects

const any2 = new Map()
any2.set('IN' , 'india')
any2.set('IN' , 'india') //will not be print becasuse it is a duplicate vale and map not store duplidcae value
any2.set('usa' , 'amrica')
any2.set('fr' , 'france')
console.log(any2);
console.log(any2.get("IN"));
// Expected output: india   


//for of looop with map()
for (const [anyy /* this is for key */, aa /* this is valu */] of any2) {
    console.log(anyy , aa);
}

const obj1 ={
    js : "javascipt",
    cpp : "c++",
    rb : "ruby",
    py: "python"
}

// for (const aaa of obj1) {
//     console.log(aaa);     /// we can not ittrate ab object with for of lopp we need to use forin 
// }

for (const i in obj1) {  // with the use of forin loop we cam iittrate a object
    console.log(i);
    console.log(obj1[i]);
    console.log(`key of the ${i}  value is :- ${obj1[i]}`);
}

// forof and for in looop  use with array
const programming = [ "python" , "solidity" , "javasript" , "css" , "html"]
for (const ii of programming) {     // it is work with forof
    console.log(ii);
}

for (const iii in programming) {  // is work with forin but it is give key value 
    console.log(iii);
}

for (const iii in programming) {
    console.log(programming[iii]); // now it is give value
}





// for of loop

arr2 = ["abhay" , "ajit" , "sugga" , "hero" , "pramod" , "hiralal" , "sunita"] 

for (const iterator of arr2) {
    console.log(iterator);
}


str1 = "ThakurAbhayPratapSingh"
for( str of str1){
    console.log(str);
}



// for of with loop and map

const map11 = new Map()
map11.set("Ch" , "China")
map11.set("Uk" , "United_kingdom")
map11.set("Pok" , "pakistan")
map11.set("IN" , "india")

for( [key , value] of map11){
    console.log(key ,  value);
}




