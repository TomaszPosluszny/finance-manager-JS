const expensesInput = document.querySelector('.list__input');
const alertInfo = document.querySelector('.todo__alert');
const addBtn = document.querySelector('.list__btn');
const ulList = document.querySelector('.todo ul');
const allTasks = document.getElementsByTagName('li');
let idNumber = 0;
let newExpenses

const addNewExpenses = () => {
	if (expensesInput.value !== '') {
		idNumber++;
		newExpenses = document.createElement('li');
		newExpenses.innerText = expensesInput.value;
		newExpenses.setAttribute('id', `todo-${idNumber}`);
		ulList.appendChild(newExpenses);

		expensesInput.value = '';
		alertInfo.innerText = '';
		createButton();
	} else {
		alertInfo.innerText = 'Wpisz treść zadania!';
	}
};

const enterCheck = () => {
	if (event.keyCode === 13) {
		addNewExpenses();
	}
};

const createButton = () => {
	const toolsPanel = document.createElement('div');
	toolsPanel.classList.add('todo__tools');
	newExpenses.appendChild(toolsPanel);

	const completeBtn = document.createElement('button');
	completeBtn.classList.add('todo__complete');
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
};

const checkClick = (e) => {
	if (e.target.classList.value !== '') {
		if (e.target.closest('button').classList.contains('todo__complete')) {
			e.target.closest('li').classList.toggle('completed');
			e.target.closest('button').classList.toggle('completed');
		} else if (e.target.closest('button').classList.contains('todo__edit')) {
			console.log('edit');
		} else if (e.target.closest('button').classList.contains('todo__delete')) {
			deleteTask(e);
		}
	}
};
const deleteTask = e => {
    const deleteTodo = e.target.closest('li');
    deleteTodo.remove();

    if (allTasks.length === 0) {
        alertInfo.innerText = 'Brak zadań na liście.';
    }
}

addBtn.addEventListener('click', addNewExpenses);
expensesInput.addEventListener('keyup', enterCheck);
ulList.addEventListener('click', checkClick);
