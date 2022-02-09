// On récupère les éléments du DOM
const form = document.querySelector('.form');
const formInput = document.querySelector('.form input');
const listItems = document.querySelector('.list-items');

// On créé un objet qui va nous permettre d'exploiter des données
let todoList = {
    todo1: {
        todo : 'Faire quelque chose'
    },
    todo2: {
        todo : 'Manger'
    },
    todo3: {
        todo : "S'inscrire sur Tinder"
    }
}

// Boucler sur l'objet
function loadHTML() {
    if(!window.localStorage.getItem('data')) return
    const data = JSON.parse(window.localStorage.getItem('data'))
    todoList = data;
    Object.keys(todoList).map(key => createHTML(todoList[key], key));
}

window.addEventListener('load', loadHTML);

form.addEventListener('submit', createItem);

function createItem(e) {
    e.preventDefault();
    const timestamp = Date.now();
    todoList[timestamp] = {
        todo : formInput.value,
        checked: false
    }
    createHTML(todoList[timestamp], timestamp);
    saveObj();
    this.reset();
}

function createHTML(objet, key) {
    if(!objet.todo) return;
    const html = `
            <span>${objet.todo}</span>
            <button name="trash" class="trash">🗑️</button>
            <button name="check" class="check">${objet.checked ? '🔄' : '✔️'}</button>
    `

    const li = document.createElement('li');
    li.classList.add('item');
    li.setAttribute('data-key', key);
    li.innerHTML = html;
    listItems.insertBefore(li, listItems.firstChild);

    li.children.trash.onclick = toBin;
    li.children.check.onclick = check;
}

function toBin() {
    this.parentNode.remove();
    const key = this.parentNode.getAttribute('data-key');
    delete todoList[key];
    saveObj();
}

function check() {
    this.parentNode.classList.toggle('flip') // Flip Flop la main dans l'froc, Flop Flip la main dans l'slip!
    this.innerHTML = this.innerHTML === '✔️' ? "🔄" : "✔️";
    const key = this.parentNode.getAttribute('data-key');
    todoList[key].checked = !todoList[key].checked;
    saveObj();
}

function saveObj() {
    window.localStorage.setItem('data', JSON.stringify(todoList));
}