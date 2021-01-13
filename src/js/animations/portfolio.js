//animations lib
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { slideFromDown } from "./functions";

gsap.registerPlugin(ScrollTrigger);

// header
gsap.from("#decoration-11", { y: 100, autoAlpha: 0.5, duration: 1.5 });

gsap.from(".portheader__main > *", {
    x: "100",
    autoAlpha: 0.5,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".portheader__main",
        start: "top bottom",
        toggleActions: "restart none none reset",
    },
});

document.querySelectorAll(".project").forEach((p) => {
    gsap.from(p, slideFromDown(p));
});
