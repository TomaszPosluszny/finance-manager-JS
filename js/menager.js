const income = document.querySelector('.area');
const expenses = document.querySelector('.area__expenses');
const walletMoney = document.querySelector('.wallet__money');
const addTransaction = document.querySelector('.add');

const nameInput = document.querySelector('#name');
const incomeInput = document.querySelector('#income');
const expensesInput = document.querySelector('#expenses');
const showError = document.querySelector('.add__error');

const walletControlAddBtn = document.querySelector('.wallet__controls--add');
const walletControlDeleteBtn = document.querySelector(
	'.wallet__controls--delete'
);
const cancelBtn = document.querySelector('.buttons__cancel');
const saveBtn = document.querySelector('.buttons__save');
const deleteBtn = document.querySelector('.transaction__delete');

let moneyArr =[0];
let ID = 0;
let root = document.documentElement;

const showTransaction = () => {
	addTransaction.style.display = 'flex';
};

const closeTransaction = () => {
	addTransaction.style.display = 'none';
	clearValue();
};

const addError = () => {
	showError.style.display = 'flex';
};

const deleteError = () => {
	showError.style.display = 'none';
};

const checkInput = () => {
	if (
		(nameInput.value !== '' && incomeInput.value !== '') ||
		expensesInput.value !== ''
	) {
		newTransaction();
        deleteError()
	} else {
		addError();
	}
};
const clearValue = () => {
	nameInput.value = '';
	incomeInput.value = '';
	expensesInput.value = '';
};

const newTransaction = () => {
	const transaction = document.createElement('div');
	transaction.classList.add('transaction');
    transaction.setAttribute('id', ID);
	transaction.innerHTML = `<p class="transaction__name"> ${nameInput.value}</p>
<p class="transaction__amount">${incomeInput.value} 
<button class="transaction__delete" onclick "deleteTransaction (${ID})"><i class="fas fa-times"></i></button></p>`
income.appendChild(transaction) && transaction.classList.add('income')
moneyArr.push(parseFloat(incomeInput.value));
closeTransaction();
ID++;
clearValue();

};

saveBtn.addEventListener('click', checkInput);
walletControlAddBtn.addEventListener('click', showTransaction);
cancelBtn.addEventListener('click', closeTransaction);
