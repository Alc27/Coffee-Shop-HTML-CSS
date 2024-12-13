let slideIndex = 0;
showSlides();

// Function to move to the next/previous slide
function plusSlides(n) {
  slideIndex += n;
  showSlides();
}

// Function to display slides
function showSlides() {
  let slides = document.getElementsByClassName("product slides");
  
  if (slideIndex >= slides.length) { 
    slideIndex = 0;
  } 
  if (slideIndex < 0) { 
    slideIndex = slides.length - 1;
  }

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  // Show the current slide
  slides[slideIndex].style.display = "block";
}

// Auto-switch slides every 3 seconds (optional)
setInterval(function() {
  plusSlides(1);
}, 3000);
