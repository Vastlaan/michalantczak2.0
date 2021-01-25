// styles
import "../../../styles/landing_main.scss";
// components
import Navigation from "../navigation";
import Header from "./header";
import Skills from "./skills";
import Portfolio from "./portfolio";
import Slider from "./slider";
import Intersection from "./intersection";
import CookieStatement from "../cookieStatement";
import Footer from "../footer";

export default function App() {
    const app = document.createElement("div");

    app.appendChild(Navigation);
    app.appendChild(Header);
    app.appendChild(Skills);
    app.appendChild(Portfolio);
    app.appendChild(Slider);
    app.appendChild(Intersection);
    app.appendChild(CookieStatement);
    app.appendChild(Footer);

    return app;
}
