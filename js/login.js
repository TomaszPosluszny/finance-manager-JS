const username = document.querySelector('#username');
const password = document.querySelector('#password');

const sendBtn = document.querySelector('.area__buttons--send');
const clearBtn = document.querySelector('.area__buttons--clear');
const info = document.querySelector('.area__send');
const badInfo = document.querySelector('.area__data')



const checkForm = (input) => {
	input.forEach((el) => {
		if (el.value === '') {
			data();
            info.style.display = 'none';
		} else {
            logged();
            badInfo.style.display = 'none';
		}
	});
};


const logged = () => {
	info.style.display = 'flex';
};

const data =() => {
    badInfo.style.display = 'flex';

}

sendBtn.addEventListener('click', (e) => {
	e.preventDefault();

	checkForm([username, password,]);
});

clearBtn.addEventListener('click', (e) => {
	e.preventDefault();

	[username, password, ].forEach((el) => {
		el.value = '';
        badInfo.style.display = 'none';
		info.style.display = 'none';
	});
});
