import render from "../render";

function getCookieStatement() {
    return render(
        "section",
        ["cookiesStatement"],
        null,
        `
        <p>
          Deze website maakt gebruik van cookies om de beste gebruikerservaring te bieden. Cookies veroorzaken geen schade aan uw
          computer en bevatten geen virussen. Door deze website te bezoeken, gaat u akkoord met ons cookiebeleid.
          <a href="./cookies.html"> Hier vind je meer informatie</a>
        </p>
        <button>
          Ok, Prima!
        </button>
      `
    );
}

export default getCookieStatement();
