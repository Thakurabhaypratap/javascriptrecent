document.write("scope")

//  {}  -- this symbol is knon as scope
// var -- var is global it can access anywhere inside the scope of outside the scope

let a = 300
if(true){
    let a = 1
    const b = 2
    var c = 3
    console.log("no two" , a);
}
console.log(c)
console.log(a);


// nested scope 
// scope in function

function one () {
    const username = "abhay"
    console.log("this is one and main function");

    function two (){
        let name = "two"
        const web = "youtube"
        console.log(username)
        console.log("this is second child function");

        function three(){
            console.log(web);
            console.log("this is third and child of two");
            console.log(name);
            console.log(username);
        }
        three()
    };
    two()
};

console.log(one())
// console.log(two())  // it can not access becasuse its scope is not there
// console.log(three())  // it can not access becasuse its scope is not there



// scope in if else

if (true){
    const username = "abhay"
    if (username == "abhay"){
        const web2 = "google"
        function anyfun(num1 , num2) {
            console.log(num1+num2);
        }
        console.log(username + "  " + web2);
        console.log(anyfun(2 , 3))
    }
    console.log(anyfun(2 , 3))
    //console.log(username + "  " + web2);// it can not access becasuse its scope is not there
}
console.log(anyfun(2 , 3))
//console.log(username + "  " + web2); // it can not access becasuse its scope is not there

// console.log(username); // it can not access becasuse its scope is not there


//// *****************      intersting       ******************

console.log(addtuwnumber(2 , 4));

function addtuwnumber (num1 , num2){
    return num1+num2
}
console.log(addtuwnumber(2 , 4));



// expresion function
const addtuwnumber2 = function(num3 , num4){
    return(num3+num4)

}

console.log(addtuwnumber2(5 ,2));