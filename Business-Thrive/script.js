const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


// testomonial section

// script.js
const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentIndex = 0;

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % track.children.length;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + track.children.length) % track.children.length;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
});




// FAQ section


// Select all question elements
const faqQuestions = document.querySelectorAll('.faq-question');

// Loop through each question and add a click event listener
faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        // Get the answer related to this question
        const answer = question.nextElementSibling;

        // Toggle the display of the answer
        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    });
});



// Popup section


// script.js
window.onload = function() {
    setTimeout(function() {
        document.getElementById('whatsapp-popup').style.display = 'block';
    }, 5000); // Show popup after 5 seconds
};

