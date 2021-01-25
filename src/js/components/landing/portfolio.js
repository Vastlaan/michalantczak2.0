import render from "../../render";

function getPortfolio() {
    return render(
        "section",
        ["portfolio"],
        null,
        `
        <img width='415' height='593' id="image-decoration-4" alt='square website decoration'>
        <img width='216' height='216' id="image-decoration-5" class='als2deco' alt='cog website decoration'>
        <i class="zmdi zmdi-chevron-down" id="image-decoration-6"></i>

        <div class="container-narrow">
          <div class="portfolio__layout als2">

            <div class="portfolio__front">
              <h1>
                Portfolio
              </h1>
              <p class='para-long grey'>
                Ik<br/>
                kijk naar de dingen<br/>
                vanuit een ander Perspectief<br/>
              </p>
            </div>

            <div class="portfolio__center">         
                <div class="portfolio__center--str">
                  <p>Creatieve oplossingen</p>
                </div>
                <div class='portfolio__center--eye'>
                  <a href="./portfolio.html">PORT</a>
                  <a href="./portfolio.html">FOLIO</a>
                </div>
                <div class="portfolio__center--trn">
                  <p>Op maat gemaakt</p>
                </div>
            </div>

            <div class="portfolio__back">
              <div class='profolio__back--text'>
                <p class='para-long grey'>        
                  UX-georiënteerde aanpak is altijd mijn prioriteit en ik zal mijn succes blijven afmeten aan de prestaties van mijn webistes.
                </p>
              </div>
            </div>

          </div>
        </div>
      `
    );
}

export default getPortfolio();
