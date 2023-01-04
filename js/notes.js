const addBtn = document.querySelector('.pushbutton__add');
const saveNote = document.querySelector('.buttons__save');
const cancelNote = document.querySelector('.buttons__cancel');
const deleteBtn = document.getElementsByClassName('pushbutton__delete');

const notePanel = document.querySelector('.addnote');
const error = document.querySelector('.addnote__error');
const textarea = document.querySelector('#text');
const category = document.querySelector('#category');

const noteArea = document.querySelector('.note');

let selectedValue;
let cardID = 0;

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
const createNote = () => {
    const newNote = document.createElement('div');
    newNote.classList.add('note__area');
    newNote.setAttribute('id', cardID);

    newNote.innerHTML = `
        <div class="note__header">
        <h3 class="note__title">${selectedValue}</h3>
        <button class="note__delete" onclick="deleteNote(${cardID})">
            <i class="fas fa-times icon"></i>
        </button>
        </div>
        <div class="note__body">
            ${textarea.value}
        </div>  
    `

    noteArea.appendChild(newNote);
    cardID++;
    textarea.value = '';
    category.selectedIndex = 0;
    notePanel.style.display = 'none';
   
}

const selectValue = () => {
    selectedValue = category.options[category.selectedIndex].text;
}

selectValue()
addBtn.addEventListener('click', showPanel);
cancelNote.addEventListener('click', closePanel);
saveNote.addEventListener('click', addNote);
