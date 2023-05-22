// Get the element where you want to display the typing animation
const typingElement = document.getElementById('typing-animation');

// Set up the typing animation
const textArray = ["Hello, World!", "Welcome to my GitHub!", "I'm an awesome developer."];
const typingDelay = 100; // Delay in milliseconds between each character
const erasingDelay = 50; // Delay in milliseconds for erasing the text
const newTextDelay = 2000; // Delay in milliseconds before typing the next text
let textArrayIndex = 0;
let charIndex = 0;

// Start the typing animation
function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    typingElement.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newTextDelay);
  }
}

// Erase the text
function erase() {
  if (charIndex > 0) {
    typingElement.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) {
      textArrayIndex = 0;
    }
    setTimeout(type, typingDelay);
  }
}

// Start the typing animation when the page loads
document.addEventListener("DOMContentLoaded", function() {
  if (textArray.length) {
    setTimeout(type, newTextDelay);
  }
});

