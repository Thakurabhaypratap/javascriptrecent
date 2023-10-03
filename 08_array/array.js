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
console.log(arr6.length)
let arr7 = arr6.splice(1,4)
console.log(arr7)
console.log(arr7.length)
let arr8 = arr7.length
console.log(arr8);

const marvel_heros = [ 'spider' , ' ironman' , ' thor ' , ' dr strang' , ' caption amriaca']
console.log(marvel_heros);
const dc_heros = ['superman' , 'aquaman' , 'batman' , 'flash']
console.log(dc_heros);
marvel_heros.push(dc_heros)
console.log(marvel_heros)
console.log(marvel_heros[4])
console.log(marvel_heros[5]) // 5th is already array
console.log(marvel_heros[5][2]) // 5th arry of 2nd object




const marvel_heros2 = [ 'spider' , ' ironman' , ' thor ' , ' dr strang' , ' caption amriaca']
console.log(marvel_heros2);
const dc_heros2 = ['superman' , 'aquaman' , 'batman' , 'flash']
console.log(dc_heros2);
allheros = marvel_heros2.concat(dc_heros2)
console.log(allheros);



const arrydept = [34, 55,35,[654,64,64 ,23 ,[75,76,94,69,43 ,[8,4,6,8,[56,897,56,7,8,3]]]]]   //in thid arry in dept 3 arry it mens array inside array

// flat prototype multipe layers array convert into one array
const aarydeptnormal = arrydept.flat(1)
const aarydeptnormal2 = arrydept.flat(2)
const aarydeptnormal3 = arrydept.flat(Infinity)

console.log(aarydeptnormal)
console.log(aarydeptnormal2)
console.log(aarydeptnormal3)



// Array.isArry check is this veriable array or not
const arr10 = "abhay"
console.log(Array.isArray(arr10));


//Array.form prototype its use for convert stringh into array
const arr11 = Array.from('ajit' + "singh");
console.log(Array.isArray(arr11));
console.log(arr11);


//Array.of prototype use to multiple strings to convert into a singhle array
const str1 = "abhay"
const str2 = "ajit"
const str3 = "didi"
const str4 = "mummy"

console.log(Array.of(str1 , str2 , str3 , str4))
