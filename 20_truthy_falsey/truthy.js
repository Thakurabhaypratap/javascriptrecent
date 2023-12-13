// ****************     Falsy value  **************
// false , 0 , -0 , bigint , 0n , null , "" , undefined , NaN



// *************    truthy value ************
// "0" , " false " , " " , [] , {} , function(){}

trulycheck = true
trulycheck2 = "true"
trulycheck3 = "false"
trulycheck4 = {}
trulycheck5 = true


if(trulycheck){
    console.log("true is truly valur");
}



if(trulycheck2){
    console.log("string is truly valur");
}
if(trulycheck3){
    console.log("this is a string is truly valur");
}
if(trulycheck4){
    console.log("this is a object is truly valur");
}



falsycheck = 0
if(falsycheck){
    console.log(" 0 zero is false value thats why this is not print");
}


if ( false == 0){
    console.log("both are falsy value so result is true");
}