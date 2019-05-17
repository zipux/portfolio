document.addEventListener("DOMContentLoaded", function() {
    var alien = document.querySelector("#alien");

    alien.addEventListener("click", function() {
        jumpAlien();
    })

    setInterval(changeFrame, 60); //100
})



indexFrame = 0;
position = 0;
v = 8;
direction = "r";
jumpPosition = "200px";
alienState = "walking";

function jumpAlien() {

    alien.style.top = "180px"
    alienState = "jumping";

    setTimeout(function(){
        alien.style.top = jumpPosition;
        alienState = "walking";
    }, 200); //500 high jump
}

function changeFrame() {

    alien.style.left = parseInt(position) + "px";
    position += v; 

    if(position <= 0) {
        v = 8; //10
        direction = "r";
    }

    if(position >= document.body.clientWidth - alien.width) {
        v = -8;
        direction = "l";
    }

    if(alienState == "walking") { 
        alien.setAttribute("src", "img/alien"+direction+"walk"+indexFrame+".gif");
    }
    
    if(indexFrame == 30) 
        indexFrame = 0;
    else
        indexFrame++;
}