// const hex = '0123456789ABCDEF';
// let color = '#'
// for(let i = 0 ; i < 6 ; i++){
//     color += hex[i]  // we need to do randim this between 0123456789ABCDEF and BTEWEEN ALL 16 CHEARECTORS in hex
//     console.log(color)
// };



 // random colo0r 


 // first way 

// function change(){
//     const hex2 = '0123456789ABCDEF'
//     let color2 = '#'
//     for(let i=0; i <6 ; i++){
//         color2 += hex2[Math.round(Math.random() *16)]
//         changebgcolor(color2)
//     };



// }

// change()

// function changebgcolor(color2){

//     let changebgcolor = document.getElementById('body')
//     changebgcolor.style.backgroundColor = color2

// }
// changebgcolor()



// second way

const aa = function (){
    const hex2 = '0123456789ABCDEF'
    let color2 = '#'
    for(let i=0; i <6 ; i++){
        color2 += hex2[Math.round(Math.random() *16)]
        // changebgcolor(color2)
    }
    return color2;
};

const bb = function (){

    document.body.style.backgroundColor = aa()
}


let interval; // now interval is assigned to global variables or scope
const startchangingcolor = function(){
    interval = setInterval(bb , 1000)  // interval inside scope we need to do id global scope
}

const stopchangingcolor = function(){
    clearInterval(interval) // we need to do interval in global scope
    
}

console.log(document.querySelector('#stopbtn'));
console.log(document.querySelector('#startbtn'));

document.querySelector('#startbtn').addEventListener('click', startchangingcolor)
document.querySelector('#stopbtn').addEventListener('click', stopchangingcolor)





// bb()

// setInterval(bb , 100)






// let c = document.getElementById('startbtn')
// c.addEventListener('click', bb) // its working when button click color will change





// let d = function(){
//     let c = document.getElementById('startbtn')
//     c.addEventListener('click', bb)

// }
