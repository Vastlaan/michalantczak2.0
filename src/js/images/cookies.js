// images
import Logo from "../../img/logo.svg";
import FlagEn from "../../img/flag-en.svg";
import FlagNl from "../../img/flag-nl.svg";

// loading images

const logo = document.querySelector("#image-logo");
const logo2 = document.querySelector("#image-logo-2");

const flag = document.querySelector("#image-flag-en");
if (flag) {
    flag.src = FlagEn;
}

const flagNl = document.querySelector("#image-flag-nl");
if (flagNl) {
    flagNl.src = FlagNl;
}

logo.src = Logo;
logo2.src = Logo;
