//Array With conditional operators ans functions


// chceck truthy value
myobj = {}
myobj2 = {
    "name":"abhay",
    "name":"abhay",
    "sub name":"ajit",
}
console.log(Object.keys(myobj2).length);
console.log(Object.keys(myobj2));
console.log(typeof(myobj));



//deactect empty array
if (Object.keys(myobj).length === 0) {
    console.log("it this working");
}


//  For of
//object in arry

const arr = [1 , 3 , 5 , "batman" , "superman"]
// console.log(arr);


for(const obj of arr){
    // console.log(obj);
}



// map not duplicat value
const map1 = new Map()
map1.set("IN" , "India")
map1.set("Pok" , "Pakistan")
map1.set("Pok" , "Pakistan")

// console.log(map1);
// console.log(map1.size);
// console.log(map1.keys());
// console.log(map1.values());



// loop at map   (for of)
const map11 = new Map()
map11.set("Ch" , "China")
map11.set("Uk" , "United_kingdom")
map11.set("Pok" , "pakistan")
map11.set("IN" , "india")

for(key of map11){
    // console.log(key);
}

for( [key , value] of map11){
    // console.log(key ,  value);
}


// loop for objects   (for in)

const obj2 = {
    name:"shweta",
    school:"anything",
    mummy: "sunita"
}

for(key1 in obj2){
    // console.log(key1);//for accesing key
    // console.log(obj2[key1]);//for accesing values
}

// .foreach prototype with function
arr3 = ["parmod" , "sunita" , "abhay" , "ajit" , "ragini"]
arr3.forEach( function (foreachuse)  {
    // console.log(foreachuse);
});






arr3.forEach( (item) => {
    // console.log(item);
});


function printme(item){
    // console.log(item);
}
aa=arr3.forEach(printme)
// console.log(aa);

arr3.forEach((any , any2 , any3 ) =>{ // item index and array
    // console.log("hii "+any , any2 , any3 );
})



arr3.forEach(( item1 , index1 , array1 ) =>{ // item index and array
    // console.log("hii "+ item1 , index1 , array1 );
})


// const form =[
//     {
//         [id]:"1",
//         email:"zz@gmail.com"
//     },
//     {
//         [id]:"2",
//         email:"hjghjcs@gmail.com"
//     },
//     {
//         [id]:"3",
//         email:"ftgsbcn@gmail.com"
//     }

// ]

const arrinonj = [
    {
        "name" : "abhay",
        "age" : "20"
    },
    {
        "name" : "shweta",
        "age" : "22"
    },
    {
        "name" : "mummy",
        "age" : "33"
    },
]

// console.log(arrinonj[1]);
// console.log(arrinonj[0]);
// console.log(arrinonj[0].name);

arrinonj.forEach( (items) => {
    console.log(items);
});
arrinonj.forEach( (items) => {
    console.log(items.name);
});
arrinonj.forEach( (items) => {
    console.log(items);
    
});

console.log("abhay");