import { gsap } from "gsap";

// load onclick events

const contactButtons = document.querySelectorAll(".btn-contact");

contactButtons.forEach((b) => {
    b.addEventListener(
        "click",
        () => (window.location.href = "./contact.html")
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
