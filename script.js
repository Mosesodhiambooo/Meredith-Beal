
// search-box open close js code
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
// let searchBoxCancel = document.querySelector(".search-box .bx-x");

searchBox.addEventListener("click", ()=>{
  navbar.classList.toggle("showInput");
  if(navbar.classList.contains("showInput")){
    searchBox.classList.replace("bx-search" ,"bx-x");
  }else {
    searchBox.classList.replace("bx-x" ,"bx-search");
  }
});

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


var swiper = new Swiper('.swiper', {
      slidesPerView: 1, /* Show 1 slide at a time on mobile */
      spaceBetween: 10,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        // Show 3 slides at a time on larger devices
        768: {
          slidesPerView: 3,
        }
      }
    });


    let currentPage = 0;
const itemsPerPage = 1; // Only one image per page on mobile view
const galleryRow = document.querySelector('.gallery-row');
const totalItems = document.querySelectorAll('.gallery-item').length;

function updateGallery() {
  const offset = currentPage * itemsPerPage * -100;
  galleryRow.style.transform = `translateX(${offset}%)`;
}

function nextPage() {
  if (currentPage < totalItems - 1) {
    currentPage++;
    updateGallery();
  }
}

function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    updateGallery();
  }
}

window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    galleryRow.style.transform = 'none'; // Reset for larger screens
  } else {
    updateGallery();
  }
});
