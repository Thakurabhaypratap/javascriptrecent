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

    if(interval == null)  // or
    // if(!interval)
    
    {

        interval = setInterval(bb , 1000)  // interval inside scope we need to do id global scope
    }

}

const stopchangingcolor = function(){
    clearInterval(interval) // we need to do interval in global scope
    interval = null ;
}

console.log(document.querySelector('#stopbtn'));
console.log(document.querySelector('#startbtn'));

document.querySelector('#startbtn').addEventListener('click', startchangingcolor)
document.querySelector('#stopbtn').addEventListener('click', stopchangingcolor)