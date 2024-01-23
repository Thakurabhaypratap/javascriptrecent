

const txtbox = document.getElementById('textbox');
const btn = document.getElementById('button');
const arr = document.getElementById('arr')




// console.log(typeof(arr));
// console.log(arr);


// const aa = txtbox.getAttribute('id')
// const b = txtbox.setAttribute("class" , "btn")
// const cc = txtbox.getAttribute('class')
// const ee = Math.random()*100
// const ff = ee.toFixed(2)
const gg = Math.round(Math.random()*100)
txtbox.innerHTML = gg
// console.log(gg);
// console.log(ff);
// const dd = txtbox.setAttribute("value", gg)


const a = []





// console.log(typeof(gg));

// console.log(aa);
// console.log(cc);
// console.log(dd);


// console.log(txtbox);
// console.log(btn);


const playgame = true;

if(playgame){
    btn.addEventListener('click', (e) => {

        e.preventDefault();
        const gess = gg

        makearr(gess)
        
    
        
    });

}

function makearr(gess){
    a.push(gess)
    arr.innerHTML = a

}


