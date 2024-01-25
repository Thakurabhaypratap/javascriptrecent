const changname = document.getElementById('h2')
changname.innerHTML = 'Thakur abhay pratap '    // it will change name and aasign abhay immeaditly 

// but i want change my nam,e after 5 second delay

// so we need to creat a naqmechanger functin and git timeout after 5 second so function will run after 5 seconds









const namechang1 = function(){
    const changname = document.getElementById('h2')
    changname.innerHTML = 'abhay'
};
const clertime = setTimeout(namechang1 , 5000);
// clearTimeout(clertime);  //it will clear timout 

// clear timeout after buttin click
document.getElementById('settimeout').addEventListener('click', function(){
    clearTimeout(namechang1);
    console.log("clicked");
})






// setTimeout(function() {
//     const aa = document.getElementsByClassName('settimeout1');
//     console.log('abhay');
//     console.log(aa);
// } , 5000)



// setTimeout(function() {
//     const bb = document.addEventListener('click' , function(e){
//         console.log(e);
//         console.log("abhay prata singh");
//     })
// }, 5000);



// interval

// set iterval run continue after some delay


const aa = document.createElement("div");
aa.innerHTML = "<h1>thakur pramod kumar singh</h1>"

aa.setAttribute('id' , 'father')


console.log(aa.innerHTML)
console.log(aa.id)

document.body.appendChild(aa)

const interval = setInterval(function() {
    console.log('abhay');
}, 5000)

// clearInterval(interval);

clearInterval(interval)
