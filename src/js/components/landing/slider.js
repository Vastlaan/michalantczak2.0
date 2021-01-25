import render from "../../render";

function getSlider() {
    return render(
        "section",
        ["slider"],
        null,
        `
        <div class="slider">

        <div class="slider__slide slider__slide--1 active-slide" id='slide-1'>
          <div class="slider__slide--container">
            <h3 class="heading-3">Web Designer & Developer</h3>
            <h1 class="heading-1">
              Ik denk <strong>constructief</strong> mee en stel <span>kritische</span> vragen
            </h1>
            <p class="para-2">
              Ik denk met de opdrachtgever mee over mogelijke oplossingen om zo efficiënt mogelijk aan de wensen van de opdrachtgever
              te voldoen          
            </p>
            <div class="slider__slide--btns">
              <button class="button-primary btn-contact"><span>Contact</span></button>
            </div>
          </div>
        </div>

        <div class="slider__slide slider__slide--2" id='slide-2'>
          <img width='415' height='593' id="image-decoration-7" alt='square website decoration'>
          <div class="slider__slide--container">
            <div class='flxcol'>
              <h1 class="heading-1">
                <span>Betrouwbaar</span> & betrokken
              </h1>
              <div class='flximg'>
                <img id='slide-2-img-1' alt="myself" width="226" height="226">
              </div>
              <h3 class="para-1 white">Michal Antczak</h3>
              <p class="para-1 grey ital">Fullstack Web Developer</p>
              <p class="para-2 ital">
                Ik transformeer ontwerpen naar functionele interfaces op mobiel en desktop
              </p>
              <button class="button-primary btn-portfolio"><span>Portfolio</span></button>
            </div>
          </div>
        </div>

        <div class="slider__slide slider__slide--3" id='slide-3'>

          <div class="slider__slide--3-links">
            <a href='https://github.io/vastlaan'>
              <i class="zmdi zmdi-github white"></i>
              <span>Github</span>
            </a>
            <a href='https://linkedin.com/michal-antczak'>
              <i class="zmdi zmdi-linkedin blue"></i>
              <span>LinkedIn</span>
            </a>
            <a href='https://www.facebook.com/webdesignstudiopurmerend'>
              <i class="zmdi zmdi-facebook blue"></i>
              <span>Facebook</span>
            </a>
            <a href="https://wa.me/31682307051?text=Hoi!%20Wij%20zijn%20geintereseerd%20in%20samenwerking%20met%20jouw.%20Neem%20een%20contact%20met%20ons!">
              <i class="zmdi zmdi-whatsapp green"></i>
              <span>WhatsApp</span>
            </a>
          </div>

          <div class="slider__slide--grid">

            <div class='flxcol hidesmldev'>
              <p class="heading-1">Volg mij online, check mij <span>github</span> account of neem gewoon contact met mij op.</p>
              <p class="para-1 ital">
                Het is belangrijk om iemand te vinden die bij uw team past. Maak met mij een kennismakingsgesprek en wie weet het, het
                wordt een perfect match.
              </p>
            </div>
            <div class='flxcol'>
              <h3 class='heading-1'><span>Contact:</span></h3>
              <ul>
                <li><a href="mailto:info@michalantczak.com">info@michalantczak.com</a></li>
                <li><a href="tel:0031682307051">(+31) (0) 6 82 30 70 51</a></li>
                <li><a href="https://itcontext.nl">www.itcontext.nl</a></li>
                <li><a href="mailto:info@itcontext.nl">info@itcontext.nl</a></li>
              </ul>
            </div>
          </div>

        </div>

      </div>
      <div class="slider__buttons">
      </div>
      `
    );
}

export default getSlider();
