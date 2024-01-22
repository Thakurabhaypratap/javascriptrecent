const form = document.querySelector('form');
console.log(form);

form.addEventListener('submit' , function(e){
    e.preventDefault(); // prevent default behavior
    console.log(e);

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results');
    console.log(height);
    console.log(weight);
    console.log(result);
    console.log(typeof (height));

    if (isNaN(height) || height === undefined || height < 0 ) {
        result.innerHTML='enter a valid height value'
    }
    else if (isNaN(height) || height === undefined || height < 0 ) {
        result.innerHTML='enter a valid height value'
    }
    else{
        result.innerHTML =  (weight / ((height * height) / 10000)).toFixed(2);
        console.log(result.innerHTML =  (weight / ((height * height) / 10000)).toFixed(2));
        console.log(result);
    }

});




const a = isNaN()
console.log(a);
const c = `<span id="aaa">abhay</span>`
console.log(c);

// console.log(`value of a is  ${a}`);

// const a = '22'
// b = Number(a)
// console.log(a);
// console.log(typeof(b));









// const form = document.querySelector('form');
// // this usecase will give you empty
// // const height = parseInt(document.querySelector('#height').value)

// form.addEventListener('submit', function (e) {
//   e.preventDefault();

//   const height = parseInt(document.querySelector('#height').value);
//   const weight = parseInt(document.querySelector('#weight').value);
//   const results = document.querySelector('#results');

//   if (height === '' || height < 0 || isNaN(height)) {
//     results.innerHTML = `Please give a valid height ${height}`;
//   } else if (weight === '' || weight < 0 || isNaN(weight)) {
//     results.innerHTML = `Please give a valid weight ${weight}`;
//   } else {
//     const bmi = (weight / ((height * height) / 10000)).toFixed(2);
//     //show the result
//     results.innerHTML = `<span>${bmi}</span>`;
//   }
// });