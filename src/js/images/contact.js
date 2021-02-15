// images
import Logo from "../../img/logo.svg";
import Image1 from "../../img/decoration-4.svg";
import FlagEn from "../../img/flag-en.svg";
import FlagNl from "../../img/flag-nl.svg";

// loading images

const logo = document.querySelector("#image-logo");
const logo2 = document.querySelector("#image-logo-2");
const logo3 = document.querySelector("#image-logo-3");
logo.src = Logo;
logo2.src = Logo;
logo3.src = Logo;
const flag = document.querySelector("#image-flag-en");
if (flag) {
    flag.src = FlagEn;
}

const flagNl = document.querySelector("#image-flag-nl");
if (flagNl) {
    flagNl.src = FlagNl;
}

const decoration1 = document.querySelector("#image-decoration-9");
decoration1.src = Image1;
