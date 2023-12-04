/**
 * Displays data on the page.
 *
 * @param {Object} data - The data to be displayed.
 */
export function displaydata(data) {
    const dataList = createElement('div', {
        class: 'data-list'
    });
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

    document.querySelector('#container').appendChild(dataList);
    dataList.appendChild(title);
    dataList.appendChild(description);
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

/**
 * Creates a container element and appends it to the '#app' element.
 *
 * @return {void} This function does not return a value.
 */
export function createContainer() {
    const container = createElement('div', {
        id: 'container',
    });
    document.querySelector('#app').append(container);   
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