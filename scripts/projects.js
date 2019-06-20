var projectsButton = document.querySelectorAll('.nav-projects a');

projectsButton.forEach(function(selecSqaure) { // selectSquare is "a" element
selecSqaure.addEventListener("click", function(e){ // addEventListener is the way to set a click event
    e.preventDefault()

    document.querySelector('.nav-projects a.active').classList.remove('active')
    this.classList.add('active')

   if(this.dataset.show=='all') {
    document.querySelector('.content-projects').classList.remove('content-html')
    document.querySelector('.content-projects').classList.remove('content-javascript')
    document.querySelector('.content-projects').classList.remove('content-react')
    document.querySelector('.content-projects').classList.remove('content-angular')
    document.querySelector('.content-projects').classList.remove('content-node')
} 
    if(this.dataset.show=='html/css') {
        document.querySelector('.content-projects').classList.add('content-html')
        document.querySelector('.content-projects').classList.remove('content-react')
        document.querySelector('.content-projects').classList.remove('content-javascript')
        document.querySelector('.content-projects').classList.remove('content-angular')
        document.querySelector('.content-projects').classList.remove('content-node')
    } 
    if(this.dataset.show=='javascript') {
        document.querySelector('.content-projects').classList.add('content-javascript')
        document.querySelector('.content-projects').classList.remove('content-html')
        document.querySelector('.content-projects').classList.remove('content-react')
        document.querySelector('.content-projects').classList.remove('content-angular')
        document.querySelector('.content-projects').classList.remove('content-node')
    }
    if(this.dataset.show=='react') {
        document.querySelector('.content-projects').classList.add('content-react')
        document.querySelector('.content-projects').classList.remove('content-html')
        document.querySelector('.content-projects').classList.remove('content-javascript')
        document.querySelector('.content-projects').classList.remove('content-angular')
        document.querySelector('.content-projects').classList.remove('content-node')
    }
    if(this.dataset.show=='angular') {
        document.querySelector('.content-projects').classList.add('content-angular')
        document.querySelector('.content-projects').classList.remove('content-html')
        document.querySelector('.content-projects').classList.remove('content-javascript')
        document.querySelector('.content-projects').classList.remove('content-react')
        document.querySelector('.content-projects').classList.remove('content-node')
    }
    if(this.dataset.show=='node') {
        document.querySelector('.content-projects').classList.add('content-node')
        document.querySelector('.content-projects').classList.remove('content-html')
        document.querySelector('.content-projects').classList.remove('content-javascript')
        document.querySelector('.content-projects').classList.remove('content-react')
        document.querySelector('.content-projects').classList.remove('content-angular')
    }
    
} ) 
console.log(selecSqaure)
}

)
document.querySelector('#hamburger-button a').addEventListener('click', function(e){
    e.preventDefault()

    const nav =  document.querySelector('#nav-mobile')
    if (nav.style.display=='block' ) {
        nav.style.display='none';
    } else {
        nav.style.display='block'
    }
})

window.onscroll = function() {scrollFunction()};
    
function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
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





