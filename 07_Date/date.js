let  anydate = new Date()
console.log(anydate.getDay());
console.log(anydate.getMonth()+1);
console.log(anydate.getHours())
console.log(anydate.getMinutes())
console.log(anydate.getTimezoneOffset())
 

let created_date = new Date(2024 , 6 , 7 , 5 , 3 , 3)
console.log(created_date);
console.log(created_date.toLocaleTimeString());
console.log(created_date.toDateString());


let anydat = new Date();
anydat.toLocaleString('default' , {
     weekday : "long",
    month:"short" 
})
console.log(anydat)