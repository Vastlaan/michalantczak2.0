import { gsap } from "gsap";

// define nodeList of slides
const slides = document.querySelectorAll(".slider__slide");

// capture slider buttons container
const buttonsContainer = document.querySelector(".slider__buttons");

// create buttons and append them to the container

const sliderButton1 = document.createElement("BUTTON");
sliderButton1.setAttribute("for", "slide-1");
sliderButton1.classList.add("button-bullet");
sliderButton1.addEventListener("click", switchToSlide);

const sliderButton2 = document.createElement("BUTTON");
sliderButton2.setAttribute("for", "slide-2");
sliderButton2.classList.add("button-bullet");
sliderButton2.addEventListener("click", switchToSlide);

const sliderButton3 = document.createElement("BUTTON");
sliderButton3.setAttribute("for", "slide-3");
sliderButton3.classList.add("button-bullet");
sliderButton3.addEventListener("click", switchToSlide);

buttonsContainer.appendChild(sliderButton1);
buttonsContainer.appendChild(sliderButton2);
buttonsContainer.appendChild(sliderButton3);

const allSliderButtons = document.querySelectorAll(".button-bullet");

// func to set gsap bc
function setBulletBackground(id) {
    allSliderButtons.forEach((btn) => {
        if (btn.getAttribute("for") === id) {
            gsap.set(btn, { backgroundColor: "white" });
        } else {
            gsap.set(btn, { backgroundColor: "grey" });
        }
    });
}

// function to switch slides
function switchSlides() {
    for (let i = 0; i < slides.length; i++) {
        if (i < slides.length - 1) {
            if (slides[i].classList.contains("active-slide")) {
                gsap.to(slides[i], { x: "-100%", duration: 1 });
                slides[i].classList.remove("active-slide");
                slides[i + 1].classList.add("active-slide");
                gsap.fromTo(
                    slides[i + 1],
                    { x: "100%" },
                    { x: 0, duration: 1 }
                );
                setBulletBackground(slides[i + 1].id);
                break;
            }
        } else {
            gsap.to(slides[i], { x: "-100%", duration: 1 });
            slides[i].classList.remove("active-slide");
            slides[0].classList.add("active-slide");
            gsap.fromTo(slides[0], { x: "100%" }, { x: 0, duration: 1 });
            setBulletBackground(slides[0].id);
            break;
        }
    }

    // allSliderButtons.forEach((button) => {
    //     if (button.getAttribute("for") === `slide-${i + 1}`)
    //         gsap.set(button, { backgroundColor: "white" });
    // });
}

// launch switching slides every 5sec.
const launchSlideshow = setInterval(() => {
    switchSlides();
}, 5000);

// logic to switch to accurate slide

function switchToSlide(e) {
    const id = e.target.getAttribute("for");

    slides.forEach((slide) => {
        if (slide.id === id) {
            if (slide.classList.contains("active-slide")) {
                console.log(id);
                setBulletBackground(id);
            } else {
                slide.classList.add("active-slide");
                gsap.fromTo(slide, { x: "100%" }, { x: 0, duration: 1 });
                setBulletBackground(id);
            }
        } else {
            slide.classList.remove("active-slide");
            gsap.to(slide, { x: "-100%", duration: 1 });
        }
    });
}
