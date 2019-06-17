let counter = 0
let maxcounter = document.querySelectorAll("li").length-1

document.querySelectorAll("li").forEach((element, index) => {
    element.classList.add("img" + index) 
    //console.log ("hello")
}); 
/*select all LI for each elemtent give a index (index is a number)
    add to my class AND the number gave by index */ 

document.querySelector(".left-arrow").addEventListener("click", function(){
    if (counter > 0) {
        hidePicture()
        counter --;
        changePicture()
            }
})

document.querySelector(".right-arrow").addEventListener("click", function(){
    if (counter < maxcounter) {
        hidePicture()
        counter ++;
        changePicture()
            }
    
})

changePicture()

function changePicture() {
    document.querySelector(".img" + counter).style.display="block"
}
function hidePicture() {
    document.querySelector(".img" + counter).style.display="none"
}