const addBtn = document.querySelector('.pushbutton__add');
const saveNote = document.querySelector('.buttons__save');
const cancelNote = document.querySelector('.buttons__cancel');
const deleteBtn = document.getElementsByClassName('pushbutton__delete');

const notePanel = document.querySelector('.addnote');


const showPanel = () => {
	notePanel.style.display = 'flex';
};

const closePanel = () => {
    notePanel.style.display = 'none';
   
}

addBtn.addEventListener('click', showPanel);
cancelNote.addEventListener('click', closePanel)

