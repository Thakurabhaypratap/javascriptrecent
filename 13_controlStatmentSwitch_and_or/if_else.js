const any = true;
if(any){
    console.log("this is true any printed");
}

if (2 == 2){
    console.log("code is excuted" );
}


if (2 == "2"){  // this will be print because == not check data type
    console.log("code is excuted2" ); 
}



if (2 ===  "2"){  // this will not be print because ===  check The data type
    console.log("code is excuted3" ); 
}


if (2 !=  3){  // this will  print because condition is true
    console.log("code is excuted4" ); 
}


temprature = 51
if(temprature<=50 ){
    console.log("you can survive because tampurate is less then 50");
}else{
    console.log("you can not survived because temprature is over 50");
};


let balance = 100
if(balance<500)console.log("this is less then 500"); // implic scope return it is use only in one line


let bal2 = 300
if(bal2<100){
    console.log("this is less then 100");
}else if(bal2<200){
    console.log("this is less then 200");
}else if(bal2<300){
    console.log("this is less then 300");
}else if(bal2<400){
    console.log("this is less then 400");
}else if(bal2<500){
    console.log("this is less then 500");
}else{
    console.log("this is upper then 500");
};




//  conditional operator is or 
const con2 = true
const con1 = true
const con3=true
if(con1 && con2 && con3){ //in && and operator all value must will be true then function run
    console.log("in && and operator all value must will be true then function run");
};



const con4 = true
const con5 = false
const con6=false
if(con4 || con5 || con6){ //in || or operator any one value must will be true then function run
    console.log("in || or operator anu one value must will be true then function run");
};



// switch mathod  :--
// it is at the place od if else use when we neet to check multiple condithon then we use switch mathod  because sift code is soeter then if else condition

const mounth = 3;
// const mounth = 12;
switch (mounth) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("feabuary");
        break;
    case 3:
        console.log("mearch");
        break;
    case 4:
        console.log("aprail");
        break;

    default:
        console.log("youn are late");
        break;
};

const email = "xyx@gmail.com"
if(email){
    console.log("email is exist");
}else{
    console.log("email is ot nexist");
    
};

const email2 = null
if(email2){
    console.log("email is exist");
}else{
    console.log("email is ot nexist");
    
};

const email3 = undefined
if(email3){
    console.log("email is exist");
}else{
    console.log("email is ot nexist");
    
};


// ************************--nullish_coalescing_Operator(??) : null , undefine --***********************

let  num1;
num1 = 5 ?? 10

console.log(num1);


















