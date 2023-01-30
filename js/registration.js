const username = document.querySelector('#username');
const password = document.querySelector('#password');
const passwordTwo = document.querySelector('#passwordTwo');
const email = document.querySelector('#email');
const sendBtn = document.querySelector('.area__buttons--send');
const clearBtn = document.querySelector('.area__buttons--clear');
const info = document.querySelector('.area__popup');

const showError = (input, msg) => {
	const formBox = input.parentElement;
	const errorMsg = formBox.querySelector('.area__error');

	formBox.classList.add('error');
	errorMsg.textContent = msg;
};

const clearError = (input) => {
	const formBox = input.parentElement;
	formBox.classList.remove('error');
};

const checkForm = (input) => {
	input.forEach((el) => {
		if (el.value === '') {
			showError(el, el.placeholder);
		} else {
			clearError(el);
		}
	});
};


const checkLength = (input, min) => {
    if (input.value.length < min) {
        showError(input, `${input.previousElementSibling.innerText.slice(0, -1)} składa się z min. ${min} znaków.`)
    }
}

const checkPassword = (pass1, pass2) => {
    if (pass1.value !== pass2.value) {
        showError(pass2, 'Hasła do siebie nie pasują.')
    }
}
sendBtn.addEventListener('click', (e) => {
	e.preventDefault();

	checkForm([username, password, passwordTwo, email]);
	checkLength(username, 3);
    checkLength(password, 8);
    checkPassword(password, passwordTwo)
});

clearBtn.addEventListener('click', (e) => {
	e.preventDefault();

	[username, password, passwordTwo, email].forEach((el) => {
		el.value = '';
	});
});
