//animations lib
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

//plugins
gsap.registerPlugin(ScrollTrigger);

// animation options

const slideFromDown = (target) => {
    return {
        scrollTrigger: {
            trigger: target,
            start: "top bottom",
            toggleActions: "restart none none reset",
        },
        duration: 1.5,
        opacity: 0,
        y: 100,
        ease: "power4",
    };
};
const pop = (target) => {
    return {
        scrollTrigger: {
            trigger: target,
            start: "top bottom",
            toggleActions: "restart none none reset",
        },
        duration: 1,
        autoAlpha: 0,
        scale: 0,
        ease: "elastic",
    };
};

function batch(targets, vars) {
    let varsCopy = {},
        interval = vars.interval || 0.1,
        proxyCallback = (type, callback) => {
            let batch = [],
                delay = gsap
                    .delayedCall(interval, () => {
                        callback(batch);
                        batch.length = 0;
                    })
                    .pause();
            return (self) => {
                batch.length || delay.restart(true);
                batch.push(self.trigger);
                vars.batchMax &&
                    vars.batchMax <= batch.length &&
                    delay.progress(1);
            };
        },
        p;
    for (p in vars) {
        varsCopy[p] =
            ~p.indexOf("Enter") || ~p.indexOf("Leave")
                ? proxyCallback(p, vars[p])
                : vars[p];
    }
    gsap.utils.toArray(targets).forEach((target) => {
        let config = {};
        for (p in varsCopy) {
            config[p] = varsCopy[p];
        }
        config.trigger = target;
        ScrollTrigger.create(config);
    });
}

export { slideFromDown, pop, batch };
