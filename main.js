import { recipes } from "./data/api.js";
import { createForm, displaydata } from "./functions/dom.js";
import { getData } from "./functions/getData.js";


function init() {
const recettes = getData(recipes);

createForm();
for(let i = 0; i < recettes.length; i++) {
    displaydata(recettes[i]);
}

console.log(recipes);
}
init();