// styles
import "../styles/landing_main.scss";
// animations
import "./animations/landing";
// images
import "./images/landing";
import "./slider";
import "./events";
import "./footer";

//call the heroku-unpaid project's pages, so they already preload

(function slientlyFetchUnpaidHerokuApps() {
    fetch("https://clairehempshop.herokuapp.com", {
        mode: "no-cors",
    })
        .then((res) => null)
        .catch((e) => console.error(e));
})();
