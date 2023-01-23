const username = document.querySelector('#username');
const password = document.querySelector('#password');
const passwordTwo = document.querySelector('#passwordTwo');
const email = document.querySelector('#email');
const sendBtn = document.querySelector('.area__buttons--send');
const clearBtn = document.querySelector('.area__buttons--clear');
const info = document.querySelector('.area__popup');

clearBtn.addEventListener('click', e => {
    e.preventDefault();

    [username, password, passwordTwo, email].forEach(el => {
        el.value = ''
    })
   
})
