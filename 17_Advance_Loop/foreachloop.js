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

programming.forEach(i => {  // first mathod
    console.log(i);
});

programming.forEach( function (i){  //seacond mathod
    console.log(i);
})

programming.forEach( (aaa) =>{  // third  mathod
    console.log(aaa);
})

programming.forEach( (aaa , index , programming) =>{  // third  mathod with iindexing and array
    console.log(aaa , index , programming);
})

function anything(item){  // fourth  mathod
    console.log(item);
}
programming.forEach(anything)  




const arrobj =[
    {
        language:'pyhon',
        exantion:'py'
    },
    {
        language:'javascript',
        exantion:'js'
    },
    {
        language:'HTML',
        exantion:'html'
    },
    {
        language:'CSS',
        exantion:'css'
    }
]
        
arrobj.forEach((item => {
    console.log(item);
}));
arrobj.forEach((item => {
    console.log(item.language);
}));
arrobj.forEach((item => {
    console.log(item.exantion);
}));