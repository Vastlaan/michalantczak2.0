//animations lib
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { slideFromDown } from "./functions";

//plugins
gsap.registerPlugin(ScrollTrigger);

// landing page animations

gsap.from(".alhr", {
    duration: 1,
    opacity: 0,
    x: 100,
    stagger: 0.25,
});
gsap.from(".alhl", {
    duration: 1,
    opacity: 0,
    x: "-100",
    stagger: 0.25,
});
gsap.from(".alhb", {
    duration: 1.5,
    scale: 0.5,
    opacity: 0,
    delay: 0.5,
    stagger: 0.2,
    ease: "elastic",
    force3D: true,
});

gsap.from("#image-decoration-3", { y: 200, duration: 1, delay: 1 });

const tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".als1, .als1deco",
        start: "top bottom",
        toggleActions: "restart none none reset",
    },
});
tl1.from(".als1", slideFromDown(".als1"));

tl1.from(".als1btn", {
    delay: 0.6,
    duration: 0.3,
    opacity: 0,
    scale: 0.5,
    transformOrigin: "center center",
});

gsap.from(".als2", slideFromDown(".als2"));

gsap.from("#image-decoration-6", {
    y: "-100",
    opacity: 0.5,
    duration: 3,
    repeat: -1,
});

gsap.from(".als2deco", {
    rotate: 360,
    repeat: -1,
    duration: 60,
    ease: "power2",
});

gsap.from(".intersection-1", slideFromDown(".intersection-1"));

// const tl1 = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".als2deco",
//         start: "top bottom",
//         toggleActions: "restart none none reset",
//         markers: { startColor: "green", endColor: "red", fontSize: "12px" },         // only for debugging
//     },
// });
