// JAVASCRIPT DOCUMENT
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

//////// MAP MAP MAP MAP //////// 

function myMap() {
    var mapCanvas = document.getElementById("map");
    var myCenter = new google.maps.LatLng(49.255435, -122.984809); 
    var mapOptions = {center: myCenter, zoom: 12};
    var map = new google.maps.Map(mapCanvas,mapOptions);
    var marker = new google.maps.Marker({ position: myCenter,
      animation: google.maps.Animation.BOUNCE });
    marker.setMap(map);
  }  