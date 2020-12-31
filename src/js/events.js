// load onclick events

const contactButtons = document.querySelectorAll(".btn-contact");

contactButtons.forEach((b) => {
    b.addEventListener(
        "click",
        () => (window.location.href = "./contact.html")
    );
});
