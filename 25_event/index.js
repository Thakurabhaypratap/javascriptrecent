// propogration 





//first way onclick event
// document.getElementById('monkey').onclick = function() {
//     alert("madharchod");
// };

//second way onclick event


// document.getElementById('monkey').addEventListener('click', function() {
//     alert("madharchod");
// });


// know what is happend in eventListener with using function aurgment e

document.getElementById('monkey').addEventListener('click', function(e) {
    console.log(e);
});
