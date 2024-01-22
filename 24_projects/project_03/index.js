const clock = document.getElementById("center")
const clock2 = document.getElementById("center2")

console.log(clock);


setInterval(() => {
    var date1 = new Date()
    clock.innerHTML = date1
    clock2.innerHTML = date1.toLocaleTimeString()
}, 1000);


// const aar = ["abhay" , 1 , "k" ]
// aar.forEach(function(items1 , index1 , arr1) {
//     console.log(items1 , index1 , arr1);
// })