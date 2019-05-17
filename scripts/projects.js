var projectsButton = document.querySelectorAll('.nav-projects a');

projectsButton.forEach(function(selecSqaure) { // selectSquare is "a" element
selecSqaure.addEventListener("click", function(e){ // addEventListener is the way to set a click event
    e.preventDefault()

    document.querySelector('.nav-projects a.active').classList.remove('active')
    this.classList.add('active')

   if(this.dataset.show=='all') {
    document.querySelector('.content-projects').classList.remove('content-html')
    document.querySelector('.content-projects').classList.remove('content-react')
    document.querySelector('.content-projects').classList.remove('content-javascript')
} 
    if(this.dataset.show=='html/css') {
        document.querySelector('.content-projects').classList.add('content-html')
        document.querySelector('.content-projects').classList.remove('content-react')
        document.querySelector('.content-projects').classList.remove('content-javascript')
    } 
    if(this.dataset.show=='react') {
        document.querySelector('.content-projects').classList.add('content-react')
        document.querySelector('.content-projects').classList.remove('content-html')
        document.querySelector('.content-projects').classList.remove('content-javascript')
    }
    if(this.dataset.show=='javascript') {
        document.querySelector('.content-projects').classList.add('content-javascript')
        document.querySelector('.content-projects').classList.remove('content-html')
        document.querySelector('.content-projects').classList.remove('content-react')
    }
} ) 
console.log(selecSqaure)
}

)
document.querySelector('#hamburger-button button').addEventListener('click', function(e){
    e.preventDefault()

    const nav =  document.querySelector('#nav-mobile')
    if (nav.style.display=='block' ) {
        nav.style.display='none';
    } else {
        nav.style.display='block'
    }
})





