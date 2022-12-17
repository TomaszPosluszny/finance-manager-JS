const income = document.querySelector('.areaplus');
const expenses = document.querySelector('.areaminus');
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

let moneyArrIncome = [0];
let moneyArrExpenses = [0];
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
		if (incomeInput.value !== '') {
			newTransactionIncome();
		} else {
			newTransactionExpenses();
		}
		deleteError();
	} else {
		addError();
	}
};
const clearValue = () => {
	nameInput.value = '';
	incomeInput.value = '';
	expensesInput.value = '';
};

const newTransactionIncome = () => {
	const transactionIncome = document.createElement('div');
	transactionIncome.classList.add('transaction');
	transactionIncome.setAttribute('id', ID);
	transactionIncome.innerHTML = `<p class="transaction__name"> ${nameInput.value}</p>
<p class="transaction__amount">${incomeInput.value} zł
<button class="transaction__delete" onclick "deleteTransaction (${ID})"><i class="fas fa-times"></i></button></p>`;
	income.appendChild(transactionIncome) &&
		transactionIncome.classList.add('income');
        moneyArrIncome.push(parseFloat(incomeInput.value));
	sumMoneyIncome(moneyArrIncome);
    
	closeTransaction();
	ID++;
	clearValue();
};

const newTransactionExpenses = () => {
	const transactionExpenses = document.createElement('div');
	transactionExpenses.classList.add('transaction');
	transactionExpenses.setAttribute('id', ID);
	transactionExpenses.innerHTML = `<p class="transaction__name"> ${nameInput.value}</p>
<p class="transaction__amount">${expensesInput.value} zł
<button class="transaction__delete" onclick "deleteTransaction (${ID})"><i class="fas fa-times"></i></button></p>`;
	expenses.appendChild(transactionExpenses) &&
		transactionExpenses.classList.add('expenses');
        moneyArrExpenses.push(parseFloat(expensesInput.value));
	sumMoneyExpenses(moneyArrExpenses);
   
	closeTransaction();
	ID++;
	clearValue();
};

const sumMoneyIncome = (moneyIncome, moneyExpenses) => {
	const newMoneyIncome = moneyIncome.reduce((a, b) => a + b);
    
	walletMoney.textContent = `${newMoneyIncome}zł`;
};
const sumMoneyExpenses = (moneyExpenses) => {
	let newMoneyExpenses = moneyExpenses.reduce((a, b) => a + b);
	walletMoney.textContent = `${newMoneyExpenses}zł`;
    console.log(newMoneyExpenses);
};


saveBtn.addEventListener('click', checkInput);
walletControlAddBtn.addEventListener('click', showTransaction);
cancelBtn.addEventListener('click', closeTransaction);
