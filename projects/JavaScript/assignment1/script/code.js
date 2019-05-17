function textcolor(obj) {
   if (obj.style.color == "red") { // != black
       obj.style.color = "black";

   } else {
       obj.style.color = "red";
   }
}

function getborder(obj) {
    if (obj.style.border == "dashed") {
        obj.style.border = "none";
 
    } else {
        obj.style.border = "dashed";
    }
 }
 
 function hideshow(obj) {
    if (obj.style.display == "none") {
        obj.style.display = "block";
    } else {
        obj.style.display = "none";
    }
}

// from earlier inside onload function
var bottomlinks = document.getElementById('bottom').getElementsByTagName('a');
for (let i = 0 ; i < bottomlinks.length ; i++) {
        if (bottomlinks[i].href.indexOf("nhl") != -1) {
            bottomlinks[i].onclick= function(e)  {
                console.log(bottomlinks[i].href + " link disabled for containing 'nhl'");
                e.preventDefault();
            }
        }
    }
	


