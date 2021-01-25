export default function render(elementType, classes, ids, innerHtml) {
    const el = document.createElement(elementType);
    if (classes) {
        classes.map((c) => el.classList.add(c));
    }
    if (ids) {
        if (typeof ids !== Array) {
            console.log("Please provide Array of strings as an ids parameter");
        } else {
            ids.map((id) => el.ids.add(id));
        }
    }
    el.innerHTML = innerHtml;

    return el;
}
