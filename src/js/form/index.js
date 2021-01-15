import { gsap } from "gsap";

const form = document.querySelector("#contact-form");
const confirmationCloseButton = document.querySelector(".confirmation__close");

confirmationCloseButton.addEventListener("click", hideConfirmation);

function displayConfirmation() {
    gsap.to(".confirmation", { autoAlpha: 1, scale: 1, duration: 0.6 });
}
function hideConfirmation() {
    gsap.to(".confirmation", { autoAlpha: 0, scale: 0, duration: 0.6 });
}

function submitContactForm(e) {
    // prevent default behavior
    e.preventDefault();
    // get form values
    const name = form.elements[0].value;
    const email = form.elements[1].value;
    const msg = form.elements[2].value;
    // define data obj to transport
    const data = {
        name,
        email,
        msg,
    };

    fetch("https://itcontext.nl/api/submitContactForm", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${TOKEN}`,
        },
        body: JSON.stringify(data),
    })
        .then((res) => {
            return res.json();
        })
        .then((d) => {
            if (d.msg === "Sucess") {
                displayConfirmation();
            }
        })
        .catch((e) => console.error(e));
}

// add function on submit
form.addEventListener("submit", submitContactForm);
