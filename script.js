// search-box open close js code
let navbar = document.querySelector(".navbar");


// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}


// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}
let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function() {
 navLinks.classList.toggle("show2");
}
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function() {
 navLinks.classList.toggle("show3");
}



const toggleButton = document.getElementById('toggle-videos');
const videos = document.querySelectorAll('.hidden-small-screen');

toggleButton.addEventListener('click', () => {
  if (toggleButton.innerText === 'Show More') {
    videos.forEach(video => video.style.display = 'block');
    toggleButton.innerText = 'Show Less';
  } else {
    videos.forEach(video => video.style.display = 'none');
    toggleButton.innerText = 'Show More';
  }
});


let currentSlide = 0;
const slides = document.querySelectorAll('.thumbnail');
const totalSlides = slides.length;

function showSlide(index) {
  if (index >= totalSlides) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = index;
  }
  
  slides.forEach((slide, i) => {
    if (i === currentSlide) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

function goToSlide(index) {
  showSlide(index);
}

// Initial display
showSlide(currentSlide);

// Adjust carousel behavior based on screen size
function adjustCarousel() {
  if (window.innerWidth <= 768) {
    // Enable pagination on mobile
    showSlide(currentSlide);
  } else {
    // Disable pagination and show all images in a row for large screens
    slides.forEach((slide) => {
      slide.style.display = 'block';
    });
  }
}

window.addEventListener('resize', adjustCarousel);
adjustCarousel();
