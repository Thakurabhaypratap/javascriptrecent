// prototype

let anyname = new String('thakurthakur')
console.log(anyname[0])
console.log(anyname.length);
console.log(anyname.toUpperCase());
console.log(anyname.charAt('t'));
console.log(anyname.charAt(2));
console.log(anyname.indexOf('k'));

console.log(anyname.__proto__);

let b1 = "AJIT"
console.log(b1.toLocaleLowerCase());


var b3 = "      thakur abhay pratap singh       ";
console.log(b3)
console.log(b3.trim());
console.log(b3.slice(0 , 9))
console.log(b3.slice(-9 , 2))
console.log(b3.slice(-9))
console.log(b3.replace("pratap" , "prtp"))
// console.log(b3.includes('abhay'))

b4 = b3.replace("pratap" , "prtp")
// console.log(b3.includes('pratap'))
console.log(b4.includes('prtp'))







const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// Expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// Expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]














