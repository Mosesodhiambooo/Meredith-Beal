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
const paginationDots = document.querySelectorAll('.pagination-dot');
let isMobile = window.innerWidth <= 768; // Check if it's a small screen
let slideInterval; // Variable to store the interval

// Show the current slide and hide the others (only for mobile)
function showSlide(index) {
  if (!isMobile) return; // Disable slideshow on large screens

  if (index >= totalSlides) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = index;
  }

  slides.forEach((slide, i) => {
    slide.style.display = (i === currentSlide) ? 'block' : 'none';
  });

  updateDots(); // Update the pagination dots
}

// Update the active dot (only for mobile)
function updateDots() {
  if (!isMobile) return; // Disable dot update on large screens

  paginationDots.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentSlide);
  });
}

// Show the next slide (only for mobile)
function nextSlide() {
  if (!isMobile) return; // Disable next slide on large screens
  showSlide(currentSlide + 1);
}

// Show the previous slide (only for mobile)
function prevSlide() {
  if (!isMobile) return; // Disable previous slide on large screens
  showSlide(currentSlide - 1);
}

// Go to a specific slide when a dot is clicked (only for mobile)
function goToSlide(index) {
  if (!isMobile) return; // Disable go to slide on large screens
  showSlide(index);
}

// Auto-play the slideshow every 3 seconds (only for mobile)
function startAutoSlideshow() {
  stopAutoSlideshow(); // Clear any existing interval
  if (isMobile) {
    slideInterval = setInterval(() => {
      nextSlide();
    }, 3000); // Move to the next slide every 3 seconds
  }
}

// Stop the slideshow interval
function stopAutoSlideshow() {
  clearInterval(slideInterval);
}

// Adjust the carousel behavior based on screen size
function adjustCarousel() {
  isMobile = window.innerWidth <= 768; // Update the screen size flag

  if (isMobile) {
    // Enable slideshow and pagination on small screens
    showSlide(currentSlide); // Show the current slide
    startAutoSlideshow(); // Start auto slideshow

    // Show the pagination dots
    paginationDots.forEach((dot) => {
      dot.style.display = 'inline-block';
    });
  } else {
    // Disable slideshow and show all images in a grid format on larger screens
    slides.forEach((slide) => {
      slide.style.display = 'block';
    });

    // Hide the pagination dots
    paginationDots.forEach((dot) => {
      dot.style.display = 'none';
    });

    // Stop auto slideshow
    stopAutoSlideshow();
  }
}

// Initial display
adjustCarousel(); // Set initial carousel behavior
window.addEventListener('resize', adjustCarousel); // Re-adjust on window resize

