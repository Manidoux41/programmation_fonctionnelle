import { recipes } from "./data/api.js";
import { createContainer, createForm, displaydata } from "./functions/dom.js";
import { getData } from "./functions/getData.js";


/**
 * Initializes the application.
 *
 * @param {type} paramName - description of parameter
 * @return {type} description of return value
 */
function init() {

    const recettes = getData(recipes);
    createForm();
    createContainer();

    for (let i = 0; i < recettes.length; i++) {
        displaydata(recettes[i]);
    }

    console.log(recipes);
}

init();