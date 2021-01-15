import { gsap } from "gsap";

// load onclick events

const contactButtons = document.querySelectorAll(".btn-contact");
const homeButtons = document.querySelectorAll(".btn-home");
const portfolioButtons = document.querySelectorAll(".btn-portfolio");
const certificatenButtons = document.querySelectorAll(".btn-certificaten");
const skillsButtons = document.querySelectorAll(".btn-skills");
const readButtons = document.querySelectorAll(".btn-read");

contactButtons.forEach((b) => {
    b.addEventListener(
        "click",
        () => (window.location.href = "./contact.html")
    );
});
homeButtons.forEach((b) => {
    b.addEventListener("click", () => (window.location.href = "./index.html"));
});
portfolioButtons.forEach((b) => {
    b.addEventListener(
        "click",
        () => (window.location.href = "./portfolio.html")
    );
});
certificatenButtons.forEach((b) => {
    b.addEventListener(
        "click",
        () => (window.location.href = "./certificaten.html")
    );
});
skillsButtons.forEach((b) => {
    b.addEventListener("click", () => (window.location.href = "./skills.html"));
});
readButtons.forEach((btn) => {
    btn.addEventListener("click", () =>
        window.scrollBy({
            top: 500,
            behavior: "smooth",
        })
    );
});

// toggle menu functionality
const navigationMenu = document.querySelector(".navigation__menu");
let isOpen = false;

function toggleMenu() {
    gsap.set(navigationMenu, { overflow: "hidden" });
    if (!isOpen) {
        gsap.to(navigationMenu, { top: "100%", bottom: "auto", duration: 0.6 });
        isOpen = true;
    } else {
        gsap.to(navigationMenu, { top: "auto", bottom: "100%", duration: 0.6 });
        isOpen = false;
    }
}
const toggleMenubutton = document.querySelector(".navigation__toggle");
toggleMenubutton.addEventListener("click", toggleMenu);
