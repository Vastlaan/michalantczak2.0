//animations lib
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { slideFromDown } from "./functions";

gsap.registerPlugin(ScrollTrigger);

// header
gsap.from("#decoration-5", { x: 100, autoAlpha: 0.5, duration: 1.5 });

gsap.from(".sklheader__main > *", {
    x: "100",
    autoAlpha: 0.5,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".sklheader__main",
        start: "top bottom",
        toggleActions: "restart none none reset",
    },
});

gsap.from(".intersection-1", slideFromDown(".intersection-1"));

// const allSkills = document.querySelectorAll(".sklmain__list--tool");

// allSkills.forEach((skill, i) => {
//     gsap.from(skill, slideFromDown(skill));
// });

gsap.from(".sklmain__nav > li", {
    duration: 1,
    autoAlpha: 0,
    scale: 0,
    ease: "elastic",
    stagger: 0.25,
});

ScrollTrigger.batch(".sklmain__list--tool", {
    onEnter: (batch) =>
        gsap.from(batch, { autoAlpha: 0, stagger: 0.15, overwrite: true }),
});
