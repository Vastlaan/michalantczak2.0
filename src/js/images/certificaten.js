import { gsap } from "gsap";

// images
import Logo from "../../img/logo.svg";
import Cert1 from "../../img/cert-1.png";
import Cert2 from "../../img/cert-2.png";
import Cert3 from "../../img/cert-3.png";
import Cert4 from "../../img/cert-4.png";
import Cert5 from "../../img/cert-5.png";
import Cert6 from "../../img/cert-6.jpg";
import Cert7 from "../../img/cert-7.png";
import Cert8 from "../../img/cert-8.png";
import FlagEn from "../../img/flag-en.svg";
import FlagNl from "../../img/flag-nl.svg";

// loading images

const logo = document.querySelector("#image-logo");
const logo2 = document.querySelector("#image-logo-2");

logo.src = Logo;
logo2.src = Logo;
const flag = document.querySelector("#image-flag-en");
if (flag) {
    flag.src = FlagEn;
}

const flagNl = document.querySelector("#image-flag-nl");
if (flagNl) {
    flagNl.src = FlagNl;
}

const cert1 = document.querySelector("#image-certificaten-1");
cert1.src = Cert1;
const cert2 = document.querySelector("#image-certificaten-2");
cert2.src = Cert2;
const cert3 = document.querySelector("#image-certificaten-3");
cert3.src = Cert3;
const cert4 = document.querySelector("#image-certificaten-4");
cert4.src = Cert4;
const cert5 = document.querySelector("#image-certificaten-5");
cert5.src = Cert5;
const cert6 = document.querySelector("#image-certificaten-6");
cert6.src = Cert6;
const cert7 = document.querySelector("#image-certificaten-7");
cert7.src = Cert7;
const cert8 = document.querySelector("#image-certificaten-8");
cert8.src = Cert8;

// full screen cert image functionality
const fullScreenCertImageBox = document.querySelector(".certfullscreen");
gsap.set(fullScreenCertImageBox, { autoAlpha: 0, scale: 0 });

function setFullScreenCertImage(src) {
    gsap.to(fullScreenCertImageBox, { autoAlpha: 1, scale: 1, duration: 0.6 });
    const fullScreenCertImage = document.querySelector(".certfullscreen-img");
    fullScreenCertImage.src = src;
}
function closeFullScreenCertImage() {
    const fullScreenCertImageBox = document.querySelector(".certfullscreen");
    gsap.to(fullScreenCertImageBox, { autoAlpha: 0, scale: 0, duration: 0.6 });
}

const closeFullScreenButton = document.querySelector(".certfullscreen-close");
closeFullScreenButton.addEventListener("click", closeFullScreenCertImage);

const certbox1 = document.querySelector("#certbox1");
certbox1.addEventListener("click", () => setFullScreenCertImage(Cert1));
const certbox2 = document.querySelector("#certbox2");
certbox2.addEventListener("click", () => setFullScreenCertImage(Cert2));
const certbox3 = document.querySelector("#certbox3");
certbox3.addEventListener("click", () => setFullScreenCertImage(Cert3));
const certbox4 = document.querySelector("#certbox4");
certbox4.addEventListener("click", () => setFullScreenCertImage(Cert4));
const certbox5 = document.querySelector("#certbox5");
certbox5.addEventListener("click", () => setFullScreenCertImage(Cert5));
const certbox6 = document.querySelector("#certbox6");
certbox6.addEventListener("click", () => setFullScreenCertImage(Cert6));
const certbox7 = document.querySelector("#certbox7");
certbox7.addEventListener("click", () => setFullScreenCertImage(Cert7));
const certbox8 = document.querySelector("#certbox8");
certbox8.addEventListener("click", () => setFullScreenCertImage(Cert8));
