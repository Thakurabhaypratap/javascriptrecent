// console.log("aa");

// DOm Mouplation all commands for brawser

// document.getElementById('tit').className

// document.getElementById('ulist')​
// document.getElementById('ulist').getAttribute('id')
// document.getElementById('ulist').setAttribute('class' , 'list')
// document.getElementById('ulist').getAttribute('class')



// document.getElementById('id1')
// const aaa = document.getElementById('id1')
// aaa.style.backgroundColor = 'green'



// const aa = document.getElementById('id1')
// aa.textContent
// aa.innerHTML
// aa.style.backgroundColor = green
// aa.style.backgroundColor = "green"
// aa.style.padding = "10px"
// aa.id
// aa.className
// aa.innerHTML
// aa.getInnerHTML



// **************** queryselector / queryselectorAoll ***********

// const aa = document.getElementById('queryid')
// // undefined   //***** output  */
// aa
// // <div class=​"queryclass" id=​"queryid">​…​</div>​   //***** output  */
// aa.querySelector('h1')
// // <h1 class=​"headingquery">​This is heading 1 by Queryselector​</h1>​   //***** output  */
// aa.querySelectorAll('h1')
// // NodeList(4) [h1.headingquery, h1.headingquery, h1.headingquery, h1.headingquery]   //***** output  */

// querySelectorAll with nodelist 
// const cc = document.querySelectorAll('li')
// // undefined      //**********  output   */
// cc
// // NodeList(3) [li, li, li]      //**********  output   */
// cc[1].style.backgroundColor = 'green'
// // 'green'      //**********  output   */


// const dd = document.querySelectorAll('h1')
// // undefined
// dd
//   output // NodeList(10) [h1#title.heading, h1.heading2, h1#heading1.heading, h1#heading1.heading, h1#heading1.heading, h1#heading1.heading, h1.headingquery, h1.headingquery, h1.headingquery, h1.headingquery]



// dd.forEach(function (i) {
//     i.style.color = 'green'
// })




const dd = document.getElementsByClassName('li')
//undefined      
dd
//HTMLCollection(6) [li.li, li.li, li.li, li.li, li.li, li.li]
const ee = document.querySelectorAll('h1')
//undefined
ee
//NodeList(10) [h1#title.heading, h1.heading2, h1#heading1.heading, h1#heading1.heading, h1#heading1.heading, h1#heading1.heading, h1.headingquery, h1.headingquery, h1.headingquery, h1.headingquery]
ee[4].innerText
//''
ee[0].innerText
//'this is heading 1'
Array.from(dd)
//(6) [li.li, li.li, li.li, li.li, li.li, li.li]
Array.from(ee)
//(10) [h1#title.heading, h1.heading2, h1#heading1.heading, h1#heading1.heading, h1#heading1.heading, h1#heading1.heading, h1.headingquery, h1.headingquery, h1.headingquery, h1.headingquery]