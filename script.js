
// Auto typing animation
const texts = ["Web Developer.", "Cyber Security Specialist."];
let index = 0;
let letterIndex = 0;
let isDeleting = false;

function animateText() {
  const currentText = texts[index];
  const textElement = document.getElementById('text-replace');
  
  if (isDeleting) {
    textElement.textContent = currentText.substring(0, letterIndex - 1);
    letterIndex--;
  } else {
    textElement.textContent = currentText.substring(0, letterIndex + 1);
    letterIndex++;
  }

  if (!isDeleting && letterIndex === currentText.length + 1) {
    isDeleting = true;
  } else if (isDeleting && letterIndex === 0) {
    isDeleting = false;
    index = (index + 1) % texts.length;
  }
  
  const typingSpeed = isDeleting ? 75 : 150; // Speed of typing and deleting
  setTimeout(animateText, typingSpeed);
}

// Start the animation when the page loads
window.onload = function() {
  animateText();
};


  // Nav hamburgerburger selections
  const burger = document.querySelector("#burger-menu");
  const ul = document.querySelector("nav ul");
  const nav = document.querySelector("nav");
  
  // Scroll to top selection
  const scrollUp = document.querySelector("#scroll-up");
  
  // Select nav links
  const navLink = document.querySelectorAll(".nav-link");
  
  // Hamburger menu function
  burger.addEventListener("click", () => {
    ul.classList.toggle("show");
  });
  
  // Close hamburger menu when a link is clicked
  navLink.forEach((link) =>
    link.addEventListener("click", () => {
      ul.classList.remove("show");
    })
  );
  
  // scroll to top functionality
  scrollUp.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });