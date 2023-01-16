const expensesInput = document.querySelector('.list__input');
const dateInput = document.querySelector('.list__date');
const alertInfo = document.querySelector('.todo__alert');
const addBtn = document.querySelector('.list__btn');
const ulList = document.querySelector('.todo ul');
const editInput = document.querySelector('.edit__input');
const editInfo = document.querySelector('.edit__info');
const editAdd = document.querySelector('.edit');
const addEditBtn = document.querySelector('.accept');
const closeEditBtn = document.querySelector('.cancel');
const allTasks = document.getElementsByTagName('li');
const checkbox = document.getElementById('important');
let idNumber = 0;
let newExpenses;
let newAdd;
let editedTodo;

const addNewExpenses = () => {
	if (checkbox.checked) {
		if (expensesInput.value !== '' && dateInput.value !== '') {
			idNumber++;
			newExpenses = document.createElement('li');
			newExpenses.innerText = expensesInput.value;

			newExpenses.setAttribute('id', `todo-${idNumber}`);
			ulList.appendChild(newExpenses);
			newData = document.createElement('div');
			newData.innerText = dateInput.value;
			newExpenses.style.color = 'red';
			newExpenses.appendChild(newData);

			expensesInput.value = '';
			alertInfo.innerText = '';
			createButton();
		} else {
			alertInfo.innerText = 'Podaj datę i wpisz treść zadania!';
		}
	} else {
		if (expensesInput.value !== '' && dateInput.value !== '') {
			idNumber++;
			newExpenses = document.createElement('li');
			newExpenses.innerText = expensesInput.value;
			newExpenses.setAttribute('id', `todo-${idNumber}`);
			ulList.appendChild(newExpenses);
			newData = document.createElement('div');
			newData.innerText = dateInput.value;
			newExpenses.appendChild(newData);

			expensesInput.value = '';
			alertInfo.innerText = '';
			createButton();
		} else {
			alertInfo.innerText = 'Podaj datę i wpisz treść zadania!';
		}
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
			editTask(e);
		} else if (e.target.closest('button').classList.contains('todo__delete')) {
			deleteTask(e);
		}
	}
};
const deleteTask = (e) => {
	const deleteTodo = e.target.closest('li');
	deleteTodo.remove();

	if (allTasks.length === 0) {
		alertInfo.innerText = 'Brak zadań na liście.';
	}
};

const editTask = (e) => {
	const oldTodo = e.target.closest('li').id;
	editedTodo = document.getElementById(oldTodo);
	editInput.value = editedTodo.firstChild.textContent;

	editAdd.style.display = 'flex';
};

const changeTodo = () => {
	if (editInput.value !== '') {
		editedTodo.firstChild.textContent = editInput.value;
		editAdd.style.display = 'none';
		editInfo.innerText = '';
	} else {
		editInfo.innerText = 'Musisz podać jakąś treść!';
	}
};

const closePopup = () => {
	editAdd.style.display = 'none';
	editInfo.innerText = '';
};
addBtn.addEventListener('click', addNewExpenses);
expensesInput.addEventListener('keyup', enterCheck);
ulList.addEventListener('click', checkClick);
addEditBtn.addEventListener('click', changeTodo);
closeEditBtn.addEventListener('click', closePopup);
