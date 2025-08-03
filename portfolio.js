const roles = ["Frontend Developer", "Learner", "Problem Solver"];
const colors = {
  "Frontend Developer": " #00e5ff",
  "Learner": " #00e5ff",
  "Problem Solver": " #00e5ff"
};

let currentRole = 0;
let charIndex = 0;
let typing = true;

const textElement = document.getElementById("animated-text");

function typeEffect() {
  const currentText = roles[currentRole];
  const currentColor = colors[currentText];

  textElement.style.color = currentColor;

  if (typing) {
    textElement.textContent = currentText.substring(0, charIndex++);
    if (charIndex > currentText.length) {
      typing = false;
      setTimeout(typeEffect, 1000);
      return;
    }
  } else {
    textElement.textContent = currentText.substring(0, charIndex--);
    if (charIndex < 0) {
      typing = true;
      currentRole = (currentRole + 1) % roles.length;
    }
  }

  setTimeout(typeEffect, typing ? 100 : 60);
}

typeEffect();