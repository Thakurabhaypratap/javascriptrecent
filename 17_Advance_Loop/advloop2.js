// forof and for in looop  use with array
const programming = [ "python" , "solidity" , "javasript" , "css" , "html"]
// for (const ii of programming) {     // it is work with forof
//     console.log(ii);
// }

// for (const iii in programming) {  // is work with forin but it is give key value 
//     console.log(iii);
// }

// for (const iii in programming) {
//     console.log(programming[iii]); // now it is give value
// }




// *****************_____foreach____*************

programming.forEach(i => {
    console.log(i);
});

programming.forEach( function (i){
    console.log(i);
})







