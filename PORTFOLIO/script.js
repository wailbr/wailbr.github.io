const roles = [
    "Aspiring Data Engineer",
    "Data Scientist",
    "Data Analyst"
];

let index = 0;
let charIndex = 0;
const typingSpeed = 70;

function typeEffect() {
    const typingElement = document.getElementById("typing");
    if (!typingElement) return;

    if (charIndex < roles[index].length) {
        typingElement.textContent += roles[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, typingSpeed);
    } else {
        setTimeout(eraseEffect, 1200);
    }
}

function eraseEffect() {
    const typingElement = document.getElementById("typing");
    if (!typingElement) return;

    if (charIndex > 0) {
        typingElement.textContent = roles[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 40);
    } else {
        index = (index + 1) % roles.length;
        typeEffect();
    }
}

document.addEventListener("DOMContentLoaded", typeEffect);
