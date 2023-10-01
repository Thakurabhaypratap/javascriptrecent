// stack , heap meamory

// stack use in remitive data type
// heap use in non oremitive data type

let a1 = "this is premitive";
// console.log(mystackpremitivedatatype);

let a2 = a1
a2 = "this is premitive2"; // it give different value

console.log(a1);
console.log(a2);


// heap use in non premitive data type
let arr3 = {
    name :"abhay",
    middle : "pratap",
    title:"singh",
    mummy:"rukhimini"
}

let arr4 = arr3;
arr4.name = "ajit"  // it is change
arr4.mummy ="sunita"

console.log(arr3.name)
console.log(arr4.name)
console.log(arr4.mummy);

