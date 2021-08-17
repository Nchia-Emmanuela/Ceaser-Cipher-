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

let key = 0;

function en_de_key(e) {
    // console.log(e.target.value);
    key = e.target.value;
    // if (key == 0 || key < 0) {
    //     e.target.value = 1;
    // }
}

let message = "";
let change = "";
let letterArray = [
    'A', 'B', 'C', 'D', 'E',
    'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'O',
    'P', 'Q', 'R', 'S', 'T',
    'U', 'V', 'W', 'X', 'Y',
    'Z'
];

function en_de_message(e) {
    // console.log(e.target.value);
    if (key === 0) {
        e.target.value = "";
    } else {
        message = e.target.value;
        message = message.toUpperCase();
    }
}

let num = 2;
let cha = 'M';

const de_button = document.querySelector('.de-button');
const en_button = document.querySelector('.en-button');

let i = 0;
let j = 0;
let newIndex = 0;

en_button.addEventListener('click', (e) => {
    e.preventDefault();
    for (i = 0; i < message.length; i++) {
        for (j = 0; j < letterArray.length; j++) {
            if (letterArray[j] === message[i]) {
                newIndex = j + Number(key);
                // console.log(newIndex);
                change += letterArray[newIndex];
                break;
            }
        }
    }
    console.log("Encypted Message: " + change);
});

de_button.addEventListener('click', (e) => {
    e.preventDefault();

});