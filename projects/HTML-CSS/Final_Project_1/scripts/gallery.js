// Java Document

///// RED BUTTON ///// RED BUTTON ///// 

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
    
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


//////// IMAGE MOVE INDEX /////// 

var myIndex = 0;
carousel();
    
function carousel  () {
var i;
var x = document.getElementsByClassName("gallery");
for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
    }
myIndex++;
if (myIndex > x.length) {myIndex = 1}    
x[myIndex-1].style.display = "block";  
setTimeout(carousel, 2000); // Change image every 2 seconds
    }

