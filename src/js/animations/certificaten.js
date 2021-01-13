//animations lib
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { slideFromDown } from "./functions";

gsap.registerPlugin(ScrollTrigger);

gsap.from(".certheader__main > *", {
    x: "100",
    autoAlpha: 0.5,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".certheader__main",
        start: "top bottom",
        toggleActions: "restart none none reset",
    },
});

ScrollTrigger.batch(".folder--file", {
    onEnter: (batch) =>
        gsap.from(batch, {
            autoAlpha: 0,
            y: 100,
            stagger: 0.25,
        }),
});

gsap.from(".about", slideFromDown(".about"));
