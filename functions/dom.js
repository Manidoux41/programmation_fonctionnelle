/**
 * Displays data on the page.
 *
 * @param {Object} data - The data to be displayed.
 */
export function displaydata(data) {
    const title = createElement('h1', {
        class: 'titre',
        id: 'titre',
    });
    title.textContent = data.name
    const description = createElement('p', {
        class: 'description',
        id: 'description',
    });
    description.textContent = data.description;

    document.querySelector('#app').appendChild(title);
    document.querySelector('#app').appendChild(description);
}

/**
 * Creates a new HTML element with the specified tag name and attributes.
 *
 * @param {string} tagName - The tag name of the element to create.
 * @param {Object} attributes - (Optional) An object containing the attributes to set on the element. Defaults to an empty object.
 * @return {HTMLElement} The newly created element.
 */
export function createElement(tagName, attributes = {}) {
    const element = document.createElement(tagName);
    for(const [attribute, value] of Object.entries(attributes)) {
        element.setAttribute(attribute, value);
    }
    return element;
}

export function createForm() {
    const form = createElement('form', {
        id: 'form',
    });

    const input = createElement('input', {
        type: 'text',
        id: 'input',
        name: 'input',
        placeholder: 'Recherche',
        autocomplete: 'off',
        autofocus: 'true',
        required: 'true'
    });
    document.querySelector('#app').appendChild(form);
    form.appendChild(input);
}