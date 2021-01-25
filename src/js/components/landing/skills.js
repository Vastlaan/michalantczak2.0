import render from "../../render";

function getSkills() {
    return render(
        "section",
        ["skills"],
        null,
        `
        <div class="container-narrow">
          <div class="skills__layout als1">

            <div class="skills__intro">
              <h3 class="heading-3 red">Skills</h3>
              <div class="skills__intro--image">
                <img  alt="person contemplating" id="image-1">
              </div>
              <h1 class="heading-1 black">
                Enthousiaste webontwikkelaar die al wat ervaring heeft met websites bouwen
              </h1>
              <p class="blue para-2 ">
                Met een passie voor het vak en een "let's do it" mentaliteit.
              </p>
            </div>

            <div class="skills__details">
              <h3 class="heading-3 black">Overzicht van vaardigheden</h3>
              <p class="blue para-1 ">
                Ik ontwerp functionele producten verpakt in een scherp design. Ik vind het ook heel belangrijk om up to date te zijn met moderne technologieën.
              </p>
              <p class="grey para-1 ">
                Ik begrijp de principes van iteratieve projectontwikkeling Agile / Scrum (echter heb ik geen praktijkervaring).
              </p>
              <ul class="skills__details--list">
                <li> <span class="devicons devicons-react blue"></span> Frontend Development Tools</li>
                <li><span class="devicons devicons-npm green"></span> Backend Development Tools</li>
                <li><i class="zmdi zmdi-palette red"></i> Design Tools</li>
                <li><span class="devicons devicons-database blue"></span> Cloud oplossingen en Linux VPS</li>
                <li><span class="devicons devicons-git black"></span>Git, Docker en nog meer...</li>
              </ul>
              <div class="skills__details--btn">
                <button class="button-primary btn-skills als1btn"><span>Lees verder...</span></button>
              </div>
              
            </div>
          </div>
        </div>
      `
    );
}

export default getSkills();
