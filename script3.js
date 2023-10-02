"use strict"
// login form
let login = document.querySelector('.login'),
    password = document.querySelector('.password');
// reg form
let loginReg = document.querySelector('.login_reg'),
    passwordReg = document.querySelector('.password_reg'),
    passwordRepeat = document.querySelector('.repeat_password');
// control elements
let inputBtn = document.querySelector('.inputBtn'),
    switchBtns = document.querySelectorAll('.switchBtn'),
    authForm = document.querySelector('.form_auth'),
    regForm = document.querySelector('.form_reg'),
    p = document.querySelector('.p');

inputBtn.disabled = true;

let passwordPattern = /^[A-Za-z0-9_.]+$/;
let loginPattern;

password.addEventListener('blur', inputLoginFormValidation)
login.addEventListener('blur', inputLoginFormValidation)

let loginElems = [];
let passwordElems = [];
let arrayOfLogin = document.querySelectorAll('.login');
let arrayOfPasswords = document.querySelectorAll('.password');

// Создали и вызвали функцию на месте
(function sortOfArray() {
    // Перебрали элементы input_login
    arrayOfLogin.forEach(elem => {
        loginElems.push(elem);
    })
    // Перебрали элементы input_password
    arrayOfPasswords.forEach(elem => {
        passwordElems.push(elem);
    })

    return loginElems, passwordElems;
})();

console.log(loginElems)

function inputLoginFormValidation() {
    if (authForm.classList.contains('active')) {
        if (login.value.length != 0 && (password.value.length != 0 && password.value.length > 3 && password.value.length < 9) && password.value.match(passwordPattern)) {
            inputBtn.disabled = false;
        }
        else {
            inputBtn.disabled = true;
        }
    }
}

function inputRegFormValidation() {
    if (regForm.classList.contains('active')) {
        // дописать код
        if (passwordReg.value == passwordRepeat.value) {

        }
        else {
            // inputBtn.disabled = true;
        }
    }
}

inputBtn.addEventListener('click', function () {
    p.textContent = "Ваше имя: " + login.value + ' Ваш пароль: ' + password.value;

    login.value = "";
    password.value = "";

    console.log("Ваше имя: " + login.value + ' Ваш пароль: ' + password.value);
})


switchBtns.forEach(elem => {
    elem.addEventListener('click', () => {
        console.log("check")
        if (regForm.classList.contains('hidden')) {
            authForm.classList.add('hidden');
            regForm.classList.remove('hidden')
        }
        else {
            authForm.classList.remove('hidden');
            regForm.classList.add('hidden')
        }
    })
})

