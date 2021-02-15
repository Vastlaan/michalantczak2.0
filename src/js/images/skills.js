// images
import Logo from "../../img/logo.svg";
import Deco5 from "../../img/decoration-5.svg";
import Figma from "../../img/figma-logo.png";
import Webpack from "../../img/webpack-logo.png";
import Next from "../../img/next-logo.png";
import Gatsby from "../../img/gatsby-logo.png";
import GraphQl from "../../img/graphql-logo.png";
import Jest from "../../img/jest-logo.png";
import TypeScript from "../../img/typescript-logo.png";
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

const decoration5 = document.querySelector("#decoration-5");
decoration5.src = Deco5;

const figmaLogo = document.querySelector("#figma-logo");
figmaLogo.src = Figma;
const webpackLogo = document.querySelector("#webpack-logo");
webpackLogo.src = Webpack;
const nextLogo = document.querySelector("#next-logo");
nextLogo.src = Next;
const gatsbyLogo = document.querySelector("#gatsby-logo");
gatsbyLogo.src = Gatsby;
const graphqlLogo = document.querySelector("#graphql-logo");
graphqlLogo.src = GraphQl;
const jestLogo = document.querySelector("#jest-logo");
jestLogo.src = Jest;
const typescriptLogo = document.querySelector("#typescript-logo");
typescriptLogo.src = TypeScript;
