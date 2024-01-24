// event propogration are two type 
// 1 is bubbling up with false 
// and second is capturing mode it go top to bottem





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
    // alert('miti suggi');
    console.log('click monkey');
} , true); // by default is is false
document.getElementById('images').addEventListener('click', function(e) {
    // alert('miti suggi ');
    console.log('click div');

    // e.stopImmediatePropagation(); // not go up and down stop event propogting 

} , true);  // by default is is false when wec use true ut means click firt


document.getElementById('git').addEventListener('click', function(e) {
    e.preventDefault();
    console.log('github.com');
});



// remove the clicked image make sure the compete div nt beremove so yo need to use conditional operatot id else for remove images


/* The code is selecting the element with the id "images" using `document.querySelector('#images')` and
assigning it to the constant variable `aa`. Then, it adds an event listener to the `aa` element for
the "click" event. When the click event is triggered, the callback function is executed. */

const aa = document.querySelector('#images')
aa.addEventListener('click' , (e) => {
    console.log('keep in mind anywhere shoudbe not use stopImmediatePropagation');
    console.log(e);



    // any2 = e.target.className
    // console.log(any.tagName);
    // console.log(any2);
    // any.remove()  // t with remove list and ul but we need to remove only image


    
    any = e.target // this is return targat value in means where is clicked and run this eventListener it is image or link or it can be any element

    console.log(any);
    
    console.log(any.tagName);  // tagname is the name of  tag (image -- IMG  ) (link -- A ) the element that is clicked 

    if(e.target.tagName === 'IMG'){
        const any = e.target
        any.remove();
    }




})