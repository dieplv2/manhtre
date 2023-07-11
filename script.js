const $$ = document.querySelectorAll.bind(document);
const $ = document.querySelector.bind(document);

let slideImg = $$("#list li");

let slideIndex = 0;
showSlides();

function showSlides() {
    for(let i = 0; i < slideImg.length; i++) {
        slideImg[i].style.display = 'none';
    }

    slideIndex++;

    if(slideIndex > slideImg.length){slideIndex = 1};

   slideImg[slideIndex-1].style.display = 'block';

    setTimeout(showSlides, 2000);
}

// scripts js navbar

let navbar = $("#navbar");

const sticky = navbar.offsetTop;

function stickyScoll() {
    if(window.pageYOffset >= sticky) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
}


// Reponsive navbar menu

let iconClick = $(".icon");

iconClick.onclick = function() {
    let navId = $("#nav-list");

    if(navId.className === "navbarTop") {
        navId.className += " reponsive";
    } else {
        navId.className = "navbarTop";
    }
}

// Zoom IMG

let imgItem = $$("#list-zoom li img");

imgItem.forEach(function(current, index){
    current.onmouseover = function() {
        let temp = current.getAttribute('src');
        $("#zoom-max img").src = temp;
        console.log(x)
    }
})

imgItem.forEach(function(current, index){
    current.onclick = function() {
        let temp = current.getAttribute('src');
        $("#zoom-max img").src = temp;
        console.log(x)
    }
})