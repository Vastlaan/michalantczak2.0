// images
import Logo from "../../img/logo.svg";
import Deco1 from "../../img/decoration-6.svg";
import Noir from "../../img/project-noir.jpg";
import Webshop from "../../img/project-webshop.jpg";
import Restaurant from "../../img/project-restaurant.jpg";
import Barber from "../../img/project-barber.jpg";
import Resume from "../../img/project-resume.jpg";
//import Itcontext from "../../img/project-itcontext.jpg";
import Elementor from "../../img/project-elementor.jpg";
import Chefsbook from "../../img/project-chefsbook.jpg";
import FirstHair from '../../img/project-first-hair.jpg'
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

const noir = document.querySelector("#portfolio-image-1");
noir.src = Noir;
const webshop = document.querySelector("#portfolio-image-2");
webshop.src = Webshop;
const restaurant = document.querySelector("#portfolio-image-3");
restaurant.src = Restaurant;
const barber = document.querySelector("#portfolio-image-4");
barber.src = Barber;
const resume = document.querySelector("#portfolio-image-5");
resume.src = Resume;
// const itcontext = document.querySelector("#portfolio-image-6");
// itcontext.src = Itcontext;
const elementor = document.querySelector("#portfolio-image-7");
elementor.src = Elementor;
const chefsbook = document.querySelector("#portfolio-image-10");
chefsbook.src = Chefsbook;
const firsthair = document.querySelector("#portfolio-image-11")
firsthair.src = FirstHair

const deco11 = document.querySelector("#decoration-11");
deco11.src = Deco1;
