const form = document.querySelector('.form');
const taskList = document.querySelector('.list-items');
const taskName = document.querySelector('input');
const checked = "☑"

form.addEventListener('submit', createItem);

function createItem(e) {
    e.preventDefault(); // Ne recharge pas la page

    taskList.innerHTML += `
    <li class="item">
            <span>${taskName.value}</span>
            <button name="trash" class="trash">🗑️</button>
            <button class="check">☐</button>
    </li>
    `;

    updateCheck();
}

function updateCheck() {
    const checkBox = document.querySelectorAll('.check');
    checkBox.forEach(element => {
        element.addEventListener('click', () => {
    
            if (element.innerHTML === checked) {
                element.innerHTML = "☐";
            } else {
                element.innerHTML = "☑";
            }
    
        });
    });

    const trash = document.querySelectorAll('.trash');
    trash.forEach(element => {
        element.addEventListener('click', () => {
    
           deleteItem();
    
        });
    });
}

function deleteItem() {
    console.log("Supprimé !");
}