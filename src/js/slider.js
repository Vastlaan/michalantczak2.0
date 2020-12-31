import { gsap } from "gsap";

const slides = document.querySelectorAll(".slider__slide");

function switchSlides(e) {
    for (let i = 0; i < slides.length; i++) {
        if (i < slides.length - 1) {
            if (slides[i].classList.contains("active-slide")) {
                gsap.to(slides[i], { x: "-100%" });
                slides[i].classList.remove("active-slide");
                slides[i + 1].classList.add("active-slide");
                gsap.fromTo(slides[i + 1], { x: "100%" }, { x: 0 });
                break;
            }
        } else {
            gsap.to(slides[i], { x: "-100%" });
            slides[i].classList.remove("active-slide");
            slides[0].classList.add("active-slide");
            gsap.fromTo(slides[0], { x: "100%" }, { x: 0 });
            break;
        }
    }
}

const sliderButton = document.querySelector("#slider-btn");
sliderButton.addEventListener("click", switchSlides);
