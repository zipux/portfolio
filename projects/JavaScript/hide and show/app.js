var dogClick = document.getElementById('dog');
var birdClick = document.getElementById('bird');
var turtleClick = document.getElementById('turtle');

dogClick.addEventListener('click', pickLink);
birdClick.addEventListener('click', pickLink);
turtleClick.addEventListener('click', pickLink);

function pickLink() {
    var allImages = document.querySelectorAll("img");
    for (var i =0; i < allImages.length; i++) {
        allImages[i].className = "hide"
    }
    var picId = this.attributes["data-img"].value;
    var pic = document.getElementById(picId);
    if(pic.className === "hide") {
        pic.className = ""
    } else {
        pic.className = "hide"
    }
}
