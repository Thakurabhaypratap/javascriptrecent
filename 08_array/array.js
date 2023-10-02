let arry1 = [ 3 ,5 , 32 , 42 , 4234 , 242 ,24 , 234]
console.log(arry1);
console.log(arry1[2]);


console.log(arry1.pop()) // this remove a last value
console.log(arry1)
console.log(arry1.push(32))
console.log(arry1)  // this is add a value in the starting of array


const arry2 = [43 , 43 , 54, 96 ,63874, 542 , 6]
console.log(arry2)
arry2.unshift(4676)  // add a value in starting
console.log(arry2)
arry2.shift()
console.log(arry2)


console.log(arry2.includes(985654)); // this value are present arry or not
console.log(arry2.includes(6));
console.log(arry2);

  // join mathod  this mathod convert array into string
arr3 = [12 , 12  , 435, 45 , 67 , 87]
console.log(typeof arr3)
console.log(arr3)
console.log(typeof arr3.join())
console.log(arr3.join());


// slice splice
let arr4 = [ 35 , 645 , 6 , 674 , 457 ,89 , 7 ]
console.log(arr4)
arr5 = arr4.slice(1 , 6)
console.log(arr5)

let arr6 = [ 68, 74 , 64, 74, 84 ,85]
console.log(arr6)
let arr7 = arr6.splice(1,4)
console.log(arr7)

