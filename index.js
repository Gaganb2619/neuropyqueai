function toggleMenu() {
    const nav = document.getElementById("navLinks");
    const hamburger = document.getElementById("hamburger");
    const closeIcon = document.getElementById("closeIcon");

    nav.classList.toggle("show");

    if (nav.classList.contains("show")) {
        hamburger.style.display = "none";
        closeIcon.style.display = "block";
    } else {
        hamburger.style.display = "block";
        closeIcon.style.display = "none";
    }
}






const carouselInner = document.querySelector('.carousel-inner');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let index = 0;
let autoScroll;

// Function to update carousel position
function updateCarousel() {
    const offset = -index * 100;
    carouselInner.style.transform = `translateX(${offset}%)`;
}

// Function to move to the next slide
function nextSlide() {
    index = (index + 1) % slides.length;
    updateCarousel();
}

// Function to move to the previous slide
function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    updateCarousel();
}

// Auto-scroll every 5 seconds
function startAutoScroll() {
    autoScroll = setInterval(nextSlide, 5000);
}

// Stop auto-scroll on manual interaction
function resetAutoScroll() {
    clearInterval(autoScroll);
    startAutoScroll();
}

// Event listeners for manual navigation
nextBtn.addEventListener('click', () => {
    nextSlide();
    resetAutoScroll();
});

prevBtn.addEventListener('click', () => {
    prevSlide();
    resetAutoScroll();
});

// Start automatic scrolling on page load
startAutoScroll();


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 3000, // Auto-slide every 3 seconds
        disableOnInteraction: false, // Continue autoplay even after user swipe
    },
    grabCursor: true, // Shows hand cursor on hover
    touchEventsTarget: 'wrapper', // Ensures touch gestures work
    breakpoints: {
        768: {
            slidesPerView: 1, // Ensures mobile gets only 1 slide at a time
        }
    }
});


document.querySelectorAll(".faq-question").forEach((button) => {
    button.addEventListener("click", () => {
        const faqItem = button.parentElement;
        
        // Close other open FAQs
        document.querySelectorAll(".faq-item").forEach((item) => {
            if (item !== faqItem) {
                item.classList.remove("active");
            }
        });

        // Toggle the clicked one
        faqItem.classList.toggle("active");
    });
});


// const slider = document.querySelector(".slider");

// function smoothScroll() {
//     slider.style.transition = "transform 0.6s ease-in-out";
//     slider.style.transform = "translateX(-270px)";

//     setTimeout(() => {
//         slider.appendChild(slider.firstElementChild); // Moves first card to the end
//         slider.style.transition = "none"; // Disable transition for instant reset
//         slider.style.transform = "translateX(0)";
//     }, 600); // Matches transition duration
// }

// // Auto-scroll every 3 seconds
// setInterval(smoothScroll, 3000);
