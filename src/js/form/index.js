const form = document.querySelector("#contact-form");

console.log(TOKEN);

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
    console.log(data);
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
                return console.log("Yeah");
            }
        })
        .catch((e) => console.error(e));
}

// add function on submit
form.addEventListener("submit", submitContactForm);
