//animations lib
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { slideFromDown } from "./functions";

gsap.registerPlugin(ScrollTrigger);

gsap.from(".contact", slideFromDown(".contact"));
gsap.from(".intersection-1", slideFromDown(".intersection-1"));
gsap.from(".about", slideFromDown(".about"));
