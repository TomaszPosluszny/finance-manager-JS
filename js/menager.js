const income = document.querySelector('.areaplus');
const expenses = document.querySelector('.areaminus');
const walletMoney = document.querySelector('.wallet__money');
const addTransaction = document.querySelector('.add');
const areaPlus = document.querySelector('.areaplus__income--green');
const areaMinus = document.querySelector('.areaminus__expenses--red');

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

let moneyArr = [0];


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
	transactionIncome.innerHTML = `<p class="transaction__name"> ${nameInput.value}</p>
<p class="transaction__amount">${incomeInput.value} zł`;
	income.appendChild(transactionIncome)
	moneyArr.push(parseFloat(incomeInput.value));
	sumMoney(moneyArr);
	closeTransaction();
	clearValue();
};

const newTransactionExpenses = () => {
	const transactionExpenses = document.createElement('div');
	transactionExpenses.classList.add('transaction');
	transactionExpenses.innerHTML = `<p class="transaction__name"> ${nameInput.value}</p>
<p class="transaction__amount">${expensesInput.value} zł`;

	expenses.appendChild(transactionExpenses)
	moneyArr.push(parseFloat(-expensesInput.value));
	sumMoney(moneyArr);
	closeTransaction();
	
	clearValue();
};

const sumMoney = (moneyArr) => {
	let newMoney = moneyArr.reduce((a, b) => a + b);
	walletMoney.textContent = `${newMoney} zł`;

};


const deleteAllTransactions = () => {
    income.innerHTML = '<h3 class="areaplus__income">Przychody:</h3>';
    expenses.innerHTML = '<h3 class="areaminus__expenses">Wydatki:</h3>';
    walletMoney.textContent = '0zł'
    moneyArr = [0];
}

saveBtn.addEventListener('click', checkInput);
walletControlAddBtn.addEventListener('click', showTransaction);
cancelBtn.addEventListener('click', closeTransaction);
walletControlDeleteBtn.addEventListener('click', deleteAllTransactions);
