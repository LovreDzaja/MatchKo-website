// const form = document.querySelector('form');
// const emailInput = document.getElementById('email-input');

// form.addEventListener('submit', (event)=>{
//   event.preventDefault();
//   const email = emailInput.value;
//   form.action = `https://formsubmit.co/${email}`;
//   form.submit();
// })

function encodeEmail(email) {
  return "https://formsubmit.co/" + btoa(email);
}
// function setReplyTo() {
//   var emailInput = document.getElementById("email-input");
//   var replyToInput = document.getElementById("_replyto");
//   replyToInput.value = emailInput.value;
// }
document.addEventListener('DOMContentLoaded', function() {
  // Get all the testimonial slides
  var testimonialSlides = document.querySelectorAll('.testimonial-slide');
  
  // Set initial slide index and show the first slide
  var currentSlide = 0;
  testimonialSlides[currentSlide].style.display = 'block';
  
  // Function to display the next slide
  function showNextSlide() {
    // Hide the current slide
    testimonialSlides[currentSlide].style.display = 'none';
    
    // Increment the slide index
    currentSlide = (currentSlide + 1) % testimonialSlides.length;
    
    // Show the next slide
    testimonialSlides[currentSlide].style.display = 'block';
  }
  
  // Set the interval for automatic slide change
  var slideInterval = setInterval(showNextSlide, 3000);
});
document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.slide');
let currentSlide2 = 0;

function showSlide() {
  slides.forEach((slide, index) => {
    if (index === currentSlide2) {
      slide.style.opacity = 1;
    } else {
      slide.style.opacity = 0;
    }
  });

  currentSlide2 = (currentSlide2 + 1) % slides.length;
}

var slideshow = setInterval(showSlide, 3000);
});
