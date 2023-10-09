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
// Validations info 
// Login
let ullogin = document.querySelector("#ullogin"),
    lenght_login = document.querySelector("#lenght_login"),
    symbol_login = document.querySelector("#symbol_login");
// Password
let ulpassword = document.querySelector("#ul_password"),
    lenght_password = document.querySelector("#lenght_password"),
    symbol_password = document.querySelector("#symbol_password");

inputBtn.disabled = true;

// let passwordPattern = /^[A-Za-z0-9_.]+$/;
// let loginPattern = /^[A-Za-z]+$/g;
// let passwordPattern = /^[0-9]+$/g;

let loginFlag = false,
    passwordFlag = false;

function validateLoginTips() {
    login.addEventListener("input", () => {
        // firstTip
        if (login.value.length < 8) {
            lenght_login.classList.add("red")
            lenght_login.classList.remove("green")
        }
        else {
            lenght_login.classList.remove("red")
            lenght_login.classList.add("green")
        }
        // secondTip
        if ((/^[A-Za-z]+$/g).test(login.value)) {
            symbol_login.classList.remove("red");
            symbol_login.classList.add("green");
        } else {
            symbol_login.classList.add("red");
            symbol_login.classList.remove("green");
        }
    })
}

function validatePasswordTips() {
    password.addEventListener("input", () => {
        // firstTip
        if (password.value.length != 11) {
            console.log(password.value.length)
            lenght_password.classList.add("red");
            lenght_password.classList.remove("green");
        } else {
            lenght_password.classList.remove("red");
            lenght_password.classList.add("green");
        }
        // secondTip
        if ((/^[0-9]+$/g).test(password.value)) {
            symbol_password.classList.remove("red");
            symbol_password.classList.add("green");
        } else {
            symbol_password.classList.add("red");
            symbol_password.classList.remove("green");
        }
    })
}

function inputLoginFormValidation() {
    // if (login.value.length != 0 && (password.value.length != 0 && password.value.length > 3 && password.value.length < 9) && password.value.match(passwordPattern)) {
    //     inputBtn.disabled = false;
    //     console.log("check-login")
    // }
    // else {
    //     inputBtn.disabled = true;
    // }

    if () {
        inputBtn.disabled = false;
        console.log("check-login")
    }
    else {
        inputBtn.disabled = true;
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


login.addEventListener('focus', () => {
    ullogin.classList.remove('hidden')
})

login.addEventListener("blur", () => {
    ullogin.classList.add('hidden')
});

password.addEventListener("focus", () => {
    ulpassword.classList.remove('hidden');
});

password.addEventListener("blur", () => {
    ulpassword.classList.add('hidden');
});

password.addEventListener('blur', inputLoginFormValidation)
login.addEventListener('blur', inputLoginFormValidation)

validateLoginTips();
validatePasswordTips();





// Наработки
// let loginElems = [];
// let passwordElems = [];
// let arrayOfLogin = document.querySelectorAll('.login');
// let arrayOfPasswords = document.querySelectorAll('.password');

// // Создали и вызвали функцию на месте
// (function sortOfArray() {
//     // Перебрали элементы input_login
//     arrayOfLogin.forEach(elem => {
//         loginElems.push(elem);
//     })
//     // Перебрали элементы input_password
//     arrayOfPasswords.forEach(elem => {
//         passwordElems.push(elem);
//     })

//     return loginElems, passwordElems;
// })();



// Общие спецсимволы
// ^ – начало ввода.
// $ – конец ввода строки.
// . – один любой символ.

// Соответствие набору символов
// \w- соответствие буквам, цифрам и символам подчеркивания.
// \W- обратный эффект: соответствие всему, что не относится к буквам, цифрам или символам подчеркивания.
// \d – соответствие цифрам 0-9.
// \D – соответствие всему, но не цифрам 0-9.
// \s – соответствие символам пробела.
// \S – соответствие не символам пробела.
// […] – соответствие любому из символов, указанному в скобках.
// [^…]- соответствие всем символам, не указанных в скобках.

// Указание количества символов для соответствия
// + – повторение символа минимум от одного раза.
// * – повторение символа от нуля.
// ? – появление символа в указанной позиции нуль или один раз.
// | – соответствует логическому ИЛИ. /hello|bye/- или hello, или bye.
// {n} – n вхождений символа в строке.
// {m, n} – вхождения от m до n раз символа в строке.

// Группировка
// (XYZ) – группировка символов или скобочная группа. Найденная строка в скобках запоминается для дальнейшего использования.

// Флаги
// g – поиск всех совпадений в строке.
// i – регистронезависимый поиск подстроки.
// m- определяет текст как множество строк и ищет совпадения маркеров ^, $ для каждого начала и конца строки в тексте.
// u – запись в регулярное выражение Unicode.
// y- поиск с символа на позиции lastindex в строке.

// let json = '[1, 2, 3, 4, 5]';

// let arr = JSON.parse(json);
// arr.push(6);

// let res = JSON.stringify(arr);
// console.log(res);
