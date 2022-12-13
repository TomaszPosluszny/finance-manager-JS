const income = document.querySelector('.area__income');
const expenses = document.querySelector('.area__expenses');
const walletMoney = document.querySelector('.wallet__money');
const addTransaction = document.querySelector('.add');

const nameInput = document.querySelector('#name');
const incomeInput = document.querySelector('#income');
const expensesInput = document.querySelector('#expenses');

const walletControlAddBtn = document.querySelector('.wallet__controls--add');
const walletControlDeleteBtn = document.querySelector('.wallet__controls--delete');
const cancelBtn = document.querySelector('.buttons__cancel');
const saveBtn = document.querySelector('.buttons__save');
const deleteBtn = document.querySelector('.transaction__delete');

const showPanel = () => {
	addTransaction.style.display = 'flex';
};

const closePanel = () => {
	addTransaction.style.display = 'none';
};

walletControlAddBtn.addEventListener('click', showPanel);
cancelBtn.addEventListener('click', closePanel)
