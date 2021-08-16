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