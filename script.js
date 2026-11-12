
// Start AOS animations
AOS.init({
    offset: 0,
    duration: 900,
    once: true
});

// Open mobile navigation
function hamburg() {
    document.querySelector(".dropdown").style.transform =
        "translateY(0)";
}

// Close mobile navigation
function cancel() {
    document.querySelector(".dropdown").style.transform =
        "translateY(-120%)";
}

// Typing animation
const words = [
    "Web Developer",
    "Computer Science Student"
];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {
    const currentWord = words[wordIndex];

    if (deleting) {
        letterIndex--;
    } else {
        letterIndex++;
    }

    typing.textContent = currentWord.substring(0, letterIndex);

    let speed = deleting ? 60 : 110;

    if (!deleting && letterIndex === currentWord.length) {
        deleting = true;
        speed = 1700;
    }

    if (deleting && letterIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 400;
    }

    setTimeout(typeEffect, speed);
}

if (typing) {
    typeEffect();
}

// Highlight current navigation link while scrolling
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".links a");

window.addEventListener("scroll", function () {
    let current = "home";

    sections.forEach(function (section) {
        if (window.scrollY >= section.offsetTop - 150) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(function (link) {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});
