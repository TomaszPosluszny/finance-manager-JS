const addBtn = document.querySelector('.pushbutton__add');
const saveNote = document.querySelector('.buttons__save');
const cancelNote = document.querySelector('.buttons__cancel');
const deleteBtn = document.getElementsByClassName('pushbutton__delete');

const notePanel = document.querySelector('.addnote');
const error = document.querySelector('.addnote__error');
const textarea = document.querySelector('#text');
const category = document.querySelector('#category');

const showPanel = () => {
	notePanel.style.display = 'flex';
};

const closePanel = () => {
	notePanel.style.display = 'none';
	error.style.visibility = 'hidden';
	textarea.value = '';
	category.selectedIndex = 0;
};
const addError = () => {
	error.style.display = 'flex';
};

const deleteError = () => {
	error.style.display = 'none';
};
const addNote = () => {
	if (
		textarea.value !== '' &&
		category.options[category.selectedIndex].value !== '0'
	) {
		createNote();
		deleteError();
	} else {
		addError();
	}
};

addBtn.addEventListener('click', showPanel);
cancelNote.addEventListener('click', closePanel);
saveNote.addEventListener('click', addNote);
