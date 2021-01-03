import "../styles/main.scss";
import "./animations";
import "./images";
import "./slider";
import "./events";
import "./footer";

function getLanguage() {
    let lang = navigator.language.split("-")[0] || "nl";

    if (lang !== "nl") {
        lang = "en";
    }

    return lang;
}

const html = document.querySelector("html");
html.setAttribute("lang", getLanguage());
