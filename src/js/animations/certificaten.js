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
    interval: 0.1, // time window (in seconds) for batching to occur.
    batchMax: 3, // maximum batch size (targets). Can be function-based for dynamic values
    onEnter: (batch) =>
        gsap.to(batch, {
            opacity: 1,
            y: 0,
            stagger: { each: 0.15, grid: [1, 3] },
            overwrite: true,
        }),
    onLeave: (batch) =>
        gsap.set(batch, { opacity: 0, y: -100, overwrite: true }),
    onEnterBack: (batch) =>
        gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
    onLeaveBack: (batch) =>
        gsap.set(batch, { opacity: 0, y: 100, overwrite: true }),
    start: "20px bottom",
    end: "top top",
});
ScrollTrigger.addEventListener("refreshInit", () =>
    gsap.set(".folder-file", { y: 0 })
);

gsap.from(".about", slideFromDown(".about"));
