import { gsap } from "gsap";

const skillsCategoriesButtons = document.querySelectorAll(".sklmain__nav > li");

let category = 0;

const allSkills = document.querySelectorAll("[data-cat]");

skillsCategoriesButtons.forEach((cat, i) => {
    if (i === category) {
        gsap.to(cat, { backgroundColor: "#e9002d", duration: 0.3 });
    } else {
        gsap.to(cat, { backgroundColor: "transparent", duration: 0.3 });
    }
    cat.addEventListener("click", () => setCategory(i));
});

function setCategory(group) {
    category = group;

    allSkills.forEach((skill) => {
        const att = skill.getAttribute("data-cat");

        if (Number(att) === category || category === 0) {
            gsap.to(skill, { display: "flex", duration: 0 });
        } else {
            gsap.to(skill, { display: "none", duration: 0 });
        }
    });

    skillsCategoriesButtons.forEach((cat, i) => {
        if (i === category) {
            gsap.to(cat, { backgroundColor: "#e9002d", duration: 0.3 });
        } else {
            gsap.to(cat, { backgroundColor: "transparent", duration: 0.3 });
        }
    });
}
