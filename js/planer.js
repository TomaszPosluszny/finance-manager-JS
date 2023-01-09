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
    } else {
        alertInfo.innerText = 'Wpisz treść zadania!'
    }
}

const enterCheck = () => {
    if (event.keyCode === 13) {
        addNewExpenses();
    }
}
addBtn.addEventListener('click', addNewExpenses);
expensesInput.addEventListener('keyup', enterCheck);