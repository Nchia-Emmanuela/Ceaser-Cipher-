const encrypt = document.getElementById('encrypt');
// another way of selecting - document.querySelector('#encrypt');

const decrypt = document.getElementById('decrypt');
// display console.log(encrypt, decrypt);

const decryptForm = document.querySelector('#decrypt-form');
const encryptForm = document.querySelector('#encrypt-form');

// console.log(decryptForm, encryptForm);

decryptForm.style.display = 'none';
encryptForm.style.display = 'none';

encrypt.addEventListener('click', () => {
    encryptForm.style.display = 'block';
    decryptForm.style.display = 'none';
});

decrypt.addEventListener('click', () => {
    encryptForm.style.display = 'none';
    decryptForm.style.display = 'block';
});

var key;

function en_de_key(e) {
    // console.log(e.target.value);
    key = e.target.value;
    // if (key == 0 || key < 0) {
    //     e.target.value = 1;
    // }
}

let message = "";

function en_de_message(e) {
    // console.log(e.target.value);
    if (key === 0) {
        e.target.value = "";
    }
}

// let num = 8;
// var letter = '';
// letter = num;

// console.log(type(num));
// console.log(letter);

const de_button = document.querySelector('.de-button');
const en_button = document.querySelector('.en-button');

en_button.addEventListener('click', (e) => {
    e.preventDefault();
});

de_button.addEventListener('click', (e) => {
    e.preventDefault();
});