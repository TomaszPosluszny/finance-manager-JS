const expensesInput  = document.querySelector('.list__input');
const alertInfo = document.querySelector('.todo__alert');
const addBtn = document.querySelector('.list__btn');
const ulList = document.querySelector('.todo ul');

    let idNumber = 0;




const addNewExpenses = () => {
    if (expensesInput.value !== '') {
        idNumber++;
        newExpenses = document.createElement('li');
        newExpenses.innerText = expensesInput.value;
        newExpenses.setAttribute('id', `todo-${idNumber}`);
        ulList.appendChild(newExpenses);

        expensesInput.value = '';
        alertInfo.innerText = ''
        createButton()
    } else {
        alertInfo.innerText = 'Wpisz treść zadania!'
    }
}

const enterCheck = () => {
    if (event.keyCode === 13) {
        addNewExpenses();
    }
}


const createButton = () => {
    const toolsPanel = document.createElement('div');
    toolsPanel.classList.add('todo__tools');
    newExpenses.appendChild(toolsPanel);

    const completeBtn = document.createElement('todo__complete');
    completeBtn.classList.add('complete');
    completeBtn.innerHTML = '<i class="fas fa-check"></i>';

    const editBtn = document.createElement('button');
    editBtn.classList.add('todo__edit');
    editBtn.innerHTML = 'EDIT';

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('todo__delete');
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>';

    toolsPanel.appendChild(completeBtn);
    toolsPanel.appendChild(editBtn);
    toolsPanel.appendChild(deleteBtn);
}

addBtn.addEventListener('click', addNewExpenses);
expensesInput.addEventListener('keyup', enterCheck);