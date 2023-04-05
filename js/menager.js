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

const cancelBtn = document.querySelector('.buttons__cancel');
const walletControlAddBtn = document.querySelector('.wallet__controls--add');
const walletControlDeleteBtn = document.querySelector(
	'.wallet__controls--delete'
);

const saveBtn = document.querySelector('.buttons__save');
const deleteBtn = document.querySelector('.transaction__delete');


const exchangeRate = document.querySelector('.exchange__rate');
const exchangeMoney = document.querySelector('.exchange__money');
const exchangeChoose = document.querySelector('.exchange__choose');

const adDataBtn = document.querySelector('.time__btn');
const addData = document.querySelector('.data');
const dataBtnCancel = document.querySelector('.data__buttons--cancel');
const dataBtnSave = document.querySelector('.data__buttons--save');
const eventName = document.querySelector('#data__name--event');

const eventSpan = document.querySelector('.time__event')
const eventDay = document.querySelector('#event-day');
const eventMonth = document.querySelector('#event-month');
const eventYear = document.querySelector('#event-year');

const daysNumber = document.querySelector('.time__days');
const hoursNumber = document.querySelector('.time__hours');
const minutesNumber = document.querySelector('.time__minutes');
const secondsNumber = document.querySelector('.time__seconds');


let moneyArr = [0];
let changeTime;

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
	income.appendChild(transactionIncome);
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

	expenses.appendChild(transactionExpenses);
	moneyArr.push(parseFloat(-expensesInput.value));
	sumMoney(moneyArr);
	closeTransaction();
	clearValue();
};

const sumMoney = (moneyArr) => {
	let newMoney = moneyArr.reduce((a, b) => a + b);
	walletMoney.textContent = `${newMoney} PLN`;

	fetch(`https://api.exchangerate.host/latest?base=PLN&symbols=EUR`)
		.then((res) => res.json())
		.then((data) => {
			const rate = data.rates.EUR;
			let exchange = newMoney * rate;
			exchangeMoney.textContent = `${exchange.toFixed(2)} EUR`;
		});
};

const deleteAllTransactions = () => {
	income.innerHTML = '<h3 class="areaplus__income">Przychody:</h3>';
	expenses.innerHTML = '<h3 class="areaminus__expenses">Wydatki:</h3>';
	walletMoney.textContent = '0zł';
	moneyArr = [0];
};

const showData = () => {
	addData.style.display = 'flex';
};

const closeData = () => {
	addData.style.display = 'none';
	clearValue();
};

const appUpdate = () => {
	eventSpan.textContent = eventName.value;
	changeTime = new Date(`${eventMonth.value} ${eventDay.value} ${eventYear.value}`);
	console.log(changeTime);
	closeData()
};
const setTime = () => {
    const currentTime = new Date();
    const result = changeTime - currentTime;

    const days = Math.floor(result / 1000 / 60 / 60 / 24);
    const hours = Math.floor(result / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(result / 1000 / 60) % 60;
    const seconds = Math.floor(result / 1000) % 60;

    daysNumber.textContent = days;
    hoursNumber.textContent = hours;
    minutesNumber.textContent = minutes;
    secondsNumber.textContent = seconds;
}

saveBtn.addEventListener('click', checkInput);
walletControlAddBtn.addEventListener('click', showTransaction);
cancelBtn.addEventListener('click', closeTransaction);
walletControlDeleteBtn.addEventListener('click', deleteAllTransactions);

adDataBtn.addEventListener('click', showData);
dataBtnCancel.addEventListener('click', closeData);
dataBtnSave.addEventListener('click', appUpdate);

appUpdate() 
setInterval(setTime, 1000);
