console.log("working ");
const button2 = document.querySelectorAll(".button");
const body = document.querySelector("body");
// console.log(button);

button2.forEach(function (button1) {
  console.log(button1);
  button1.addEventListener("click", function (e) {
    console.log(e);
    // console.log(e.target);
    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "red") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "green") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }
  });
});









// arr2 = ["abhay" , "ajit" , "sugga" , "hero" , "pramod" , "hiralal" , "sunita"]

// for (const iteator1 of arr2) {
//     console.log(iteator1);
// }

// str1 = "ThakurAbhayPratapSingh"
// for( str11 of str1){
//     console.log(str11);
// }

// const map11 = new Map()
// map11.set("Ch" , "China")
// map11.set("Uk" , "United_kingdom")
// map11.set("Pok" , "pakistan")
// map11.set("IN" , "india")

// for( [key1 , value1] of map11){
//     console.log(key1 ,  value1);
// }

const programming = ["python", "solidity", "javasript", "css", "html"];

// programming.forEach(i => {  // first mathod
//     console.log(i);
// });

// for (const ii of programming) {     // it is work with forof
//     console.log(ii);
// }

// for (const iii in programming) {  // is work with forin but it is give key value like 1 2 3 4
//     console.log(iii);
// }

// for (const iii in programming) {
//     console.log(programming[iii]); // now it is give value
// }

// const aa = "abhaypratapsingh"
// for (let index = 0; index < aa.length; index++) {
//     const element = aa[index];
//     console.log(element);
// }

// for(ii in aa){   // is work with forin but it is give key value like 1 2 3 4
//     console.log(ii);
// }

// for(ii of aa){   //
//     console.log(ii);
// }

// programming.forEach( (aaa , index , programming) =>{  // third  mathod with iindexing and array
//     console.log(aaa , index , programming);
// })

// programming.forEach( (aaa ,  programming) =>{  // third  mathod with iindexing and array
//     console.log(aaa ,  programming);
// })
