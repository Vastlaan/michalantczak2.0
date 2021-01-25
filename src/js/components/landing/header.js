import render from "../../render";

function getHeader() {
    return render(
        "header",
        ["header"],
        null,
        `
        <img width='587' height='587' id="image-decoration-1" alt='circle website decoration'>
        <img width='415' height='593' id="image-decoration-2" alt='square website decoration'>
        <img width='418' height='207' id="image-decoration-3" alt='triangular website decoration'>

        <div class='container-narrow'>
          <div class="header__layout">
            <div class="header__motto">
              <p class="para-long alhl">
                Mijn ontwerpen combineren vorm en esthetiek met stijlvolle en gestructureerde code.
              </p>
            </div>
            <div class="header__disclaimer">
              <p class=" blue para-long alhl">
                Al mijn websites zijn responsive. Elke schermdiameter heeft zijn passende layout en inhoudelijke structuur, zodat
                de website goed wordt weergegeven op verschillende apparaten
              </p>
            </div>
            <div class="header__image alhl">
              <img  id="image-myself" alt="michal antczak freelance webdeveloper" width='353' height='426'>
            </div>
            <div class="header__info">
              <h3 class="heading-3 alhr">Web Designer & Developer</h3>
              <h1 class="heading-1 alhr">
                Ben je op <strong>zoek</strong> naar iemand om jouw <span>developers</span> team te verrijken? 
              </h1>
              <p class="para-2 alhr">
                Iemand die frontend- en backend-technologieën kent en
                inzicht heeft in online marketingstrategieën?
                
              </p>
              <div class="header__info--btns">
                <button class="button-empty btn-contact alhb">Contact</button>
                <button class="button-empty btn-certificaten alhb">Certificaten</button>
              </div>
              <p class="blue para-2 alhr ">
                Stop met verder zoeken, u bent op de juiste plek! Ik ken moderne technologieën en heb ervaring met het bouwen van
                websites op verschillende platforms.
              </p>
            </div>
          </div>
        </div>
      `
    );
}

export default getHeader();
