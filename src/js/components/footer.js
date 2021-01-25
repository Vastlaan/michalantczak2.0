import render from "../render";

function getFooter() {
    return render(
        "footer",
        ["footer"],
        [],
        `
      <div class="footer__layout">

        <div class="footer__name">
          <div class="footer__name--logo">
            <img id="image-logo-2" alt="logo" width='37' height='37'>
            <h1><span class='red'>M</span>ichal <span class='blue'>A</span>ntczak</h1>
          </div>
          <p class="para-1">Web Designer & Developer</p>
        </div>

        <div class="footer__contact">
          <a class='para-1 grey' href="mailto:info@michalantczak.com"><i class="zmdi zmdi-email"></i>info@michalantczak.com</a>
          <a class='para-1 grey' href="tel:0031682307051"><i class="zmdi zmdi-phone"></i>(+31) (0) 6 82 30 70 51</a>
        </div>

        <div class="footer__info-1">
          <p class="para-small blue">Wil je met mij samenwerken? Ik ben bereikbaar vanaf Maandag t/m Zaterdag tussen 9:00 en 17:00, of stuur mij een e-mail wanneer je wilt.</p>
        </div>

        <div class="footer__info-2">
          <p class="para-small red">Duik in mijn website, bezoek mijn social media profielen, leer mij beter kennen. Neem contact met mij en maak een afspraak voor kennismakingsgesprek.</p>
        </div>

        <div class="footer__btn footer__btn--home">
          <button class='btn-home'>
            <i class="zmdi zmdi-home blue"></i>
            Voorpagina
          </button>
        </div>

        <div class="footer__btn footer__btn--skills">
          <button class='btn-skills'>
            <i class="zmdi zmdi-code red"></i>
            Skills
          </button>
        </div>
        <div class="footer__btn footer__btn--portfolio">
          <button class='btn-portfolio'>
            <i class="zmdi zmdi-collection-case-play green"></i>
            Portfolio
          </button>
        </div>
        <div class="footer__btn footer__btn--contact">
          <button class='btn-contact'>
            <i class="zmdi zmdi-headset-mic red"></i>
            Contact
          </button>
        </div>
        <div class="footer__btn footer__btn--certificats">
          <button class='btn-certificaten'>
            <i class="zmdi zmdi-graduation-cap green"></i>
            Certificaten
          </button>
        </div>

        <!-- footer decorations -->
        <div class="footer-deco-1"></div>
        <div class="footer-deco-2"></div>
        <div class="footer-deco-3"></div>
        <div class="footer-deco-4"></div>

      </div>

      <div class="footer__copyright">
        <p class='footer__copyright--text para-small'></p>
        <ul>
          <li><a href="https://github.io/vastlaan">Github</a></li>
          <li><a href="https://linkedin.com/michal-antczak">LinkedIn</a></li>
          <li><a href="https://www.facebook.com/webdesignstudiopurmerend">Facebook</a></li>
          <li><a href="./cookies.html">Cookies Policy</a></li>
        </ul>
      </div>
    `
    );
}

export default getFooter();
