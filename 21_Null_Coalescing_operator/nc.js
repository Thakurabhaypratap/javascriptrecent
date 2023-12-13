// nullish colescing operator
// its assign first not null undefine value
const aaa = 11 ?? 20 // its assing 11
const aaa2 = "" ?? 20 // its assing "" 
const aaa3 = null ?? 20 // its assing 20 because null in null value
console.log(aaa);
console.log(aaa2);
console.log(aaa3);


const aa="abhay" ?? "ajit"
const aa2= null ?? "ajit"
const aa3= undefined ?? "ajit"  // undefine is null


console.log(aa);
console.log(aa2);
console.log(aa3);




//****************************---Turnery Operator---********************************
// condition ? : true : false ;  // syntex form
const iceTea = 100
iceTea<=50 ? console.log("iceTea price in less then 50") : console.log("iceTeam price is more then 50");


