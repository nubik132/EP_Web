const form = document.querySelector('form');
const loginForm = document.querySelector('#login');
const passwordForm = document.querySelector('#password');
const submit = document.querySelector('#submit');

let code;

const ALPHABET = "abcdefghijklmnopqrstuvwxyz";

form.addEventListener('submit', (event) => {
    event.preventDefault();
    code = "";
    const login = loginForm.value.toLowerCase();
    const password = passwordForm.value.toLowerCase();
    const ind1 = ALPHABET.indexOf("h");
    const ind2 = ALPHABET.indexOf(login[1]);
    const ind3 = ALPHABET.indexOf(login[1 % login.length]);
    for (let i = 0;
        i < (login.length > password.length ?
            login.length :
            password.length);
        i++) {
        code += ALPHABET[(ALPHABET.indexOf(login[i % login.length]) +
            ALPHABET.indexOf(password[i % password.length])) %
            ALPHABET.length];
    }
    console.log(code);

});
