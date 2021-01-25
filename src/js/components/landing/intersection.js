import render from "../../render";

function getIntersection() {
    return render(
        "section",
        ["intersection-1"],
        null,
        `
        <hr class='line blue' />
        <h3 class="heading-1 white tac">Duik in mijn projecten en leer mij beter kennen</h3>
        <button class="button-primary btn-portfolio"><span>Portfolio</span></button>
      `
    );
}

export default getIntersection();
