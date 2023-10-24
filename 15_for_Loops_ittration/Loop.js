// for loop

let num1 = 20
for (let index = 0; index <= num1; index++) {
    const element = index;
    console.log(element);
    
}


for(i=0 ; i<5 ; i++){
    console.log(i);
}


for(i=0 ; i<20 ; i++){
    if (i == 7 ) {
        continue;
    }else if (i == 9) {
        continue;
    }else if (i == 15) {
        break;
    }
    console.log(i);
}

// loop inside loop
for (i = 0 ; i <3 ; i++){
    console.log(`this is outerloop ${i}`);
    for(j=0 ; j<7 ; j++){
        console.log(j);
    }
}


// array with loop
arr1 = ["abhay" , "ajit" , "sugga" , "hero" , "pramod" , "hiralal" , "sunita"] 
for(i=0; i<arr1.length ; i++){
    elements =arr1[i]
    console.log(elements);
}




