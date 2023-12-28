
let elem = document.querySelectorAll(".elem");

elem.forEach(function (element){

    
element.addEventListener("mouseenter",function() {
 element.childNodes[3].style.opacity = 1   


});

element.addEventListener("mouseleave",function() {
    element.childNodes[3].style.opacity = 0  


});

element.addEventListener("mousemove",function(delt) {
    element.childNodes[3].style.left= delt.x+ "px";  
    // element.childNodes[3].style.top= delt.y+ "px"; 


});




});








   // Check Only first Image Cursor Pointer

// let elem = document.querySelectorAll("#elem1 img");

// elemImage.addEventListener("mousemove",function(elemt) {
//     elem.style.left = elemt.x + "px"
//     elem.style.top = elemt.y + "px"
// });

// elemImage.addEventListener("mouseenter",function(elemt) {
//     elem.style.opacity =  1
// });

// elemImage.addEventListener("mouseleave",function(elemt) {
//     elem.style.opacity =  -0
// });
