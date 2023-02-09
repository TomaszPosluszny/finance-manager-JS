const hamburger = document.querySelector('.hamburger');
const mobile = document.querySelector('.mobile');

const addMenu = () => {
	mobile.style.display = 'flex';
};

hamburger.addEventListener('click', addMenu);