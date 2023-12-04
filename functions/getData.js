/**
 * Generates a new array of recipes with each recipe assigned a unique ID.
 *
 * @param {Array} recipes - An optional array of recipes.
 * @return {Array} - The updated array of recipes with unique IDs assigned.
 */
export function getData(recipes=[]) {
    for(let i = 0; i < recipes.length; i++) {
        recipes[i].id = i
    }
    return recipes
}

