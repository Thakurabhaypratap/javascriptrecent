// const bb = document.body;
// console.log(bb);


// console.log('jay sree ram');

// const aa = document.getElementsByTagName('body');

// console.log(aa.item(0).innerText);

// const cc = document.createElement('div');
// cc.innerHTML = '<h2>abhay</h2>';
// document.body.appendChild(cc)
// console.log(cc);


// // document.body.style.backgroundColor = 'black';
document.body.style.cssText = 'background-color: black; text-align: center; color: white; font-size:30px;'



// console.log(
//     document.getElementsByTagName('h1')
// );


// console.log(
//     document.getElementsByTagName('h1')[0]
// );


// const promt = prompt("Enter Yout text")
// document.write(promt)


// setTimeout(() => {
//     console.log("abhay pratap  singh")
// }, 3000)
// console.log("ajit")


// const aaa  = (src) => {
//     let script = document.createElement('script')
//     script.type = 'text/javascript'
//     script.src = src
//     document.body.appendChild(script)
//     // document.getElementsByTagName('head') [0].appendChild(script)  // in head
//     console.log(script.innerText);
//     script.onload = () => {
//         console.log( "this script is loded "   +  script.innerText);
//     };
//     script.onerror = () => {
//         console.log(' script is not velid');
//     };

// }


// aaa('https://cdnjs.cloudfare.com/ajax/libs/jquery/3.5.1/jquery.min.js')



// const pr1 = new Promise((resolve, reject) => {
//     console.log('abhay');
//     a = true;
//     a = false;
//     if(a){
//         resolve(56)
//     }else{
//         reject(' error is there')
//     }
// });




// const pr2 = (src) => {
//     return new Promise((resolve, reject) => {
//         let script = document.createElement('script')
//         script.type = 'text/javascript'
//         script.src = src
//         document.body.appendChild(script) 
//         script.onload = () =>{
//             resolve(56)
//         }
//         script.onerror = () => {
//             reject(0)
//         };
  
//     })
// }



// const src2 = pr2("https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js")
// src2.then((value) => {
//     console.log(value)
// }).catch((error) => {
//     console.log("Failed to load")
// });




// const cc = new Promise( (resolve, reject) => {
//     console.log('promise in runnin');
//     // a = true;
//     a = false;
//     if(a){
//         resolve(56)
//     }else{
//         reject(new Error('new error created by THAKUR AHAY PRATAP SINGH'))
//     }
// })











const dd = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('first request');
        a = true;
        // a = false;
        if(a){
            resolve(56)
        }else{
            reject(new Error('third new error created by THAKUR AHAY PRATAP SINGH'))
        }
    },1000)
})
const ee = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('second request');
        // a = true;
        a = false;
        if(a){
            resolve(56)
        }else{
            reject(new Error('second new error created by THAKUR AHAY PRATAP SINGH'))
        }
    },3000)
})
const ff = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('third request');
        // a = true;
        a = false;
        if(a){
            resolve(56)
        }else{
            reject(new Error('third new error created by THAKUR AHAY PRATAP SINGH'))
        }
    },5000)
})





// const gg = new Promise.all([dd , ee , ff]) // all promise run in 1 line

// gg.then((value) => {
//     console.log(value);
// });





let hh = Promise.allSettled([dd , ee , ff]) // all promise run in 1 line if any promise rejexcted programe is not will be stop

hh.then((value) => {
    console.log(value);
});