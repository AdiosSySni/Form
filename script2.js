"use strict"
// // let arr2 = [];
// // arr2.push('c');
// // arr2.push('a', 'b');
// // let key = 2;
// // console.log(arr2[key]);
// // console.log(arr2);

// let arr = ['1', '2', 3, null, undefined, true, false];
// console.log(arr.length)
// // // arr = ['a', 'b', 'c'];
// // arr[2] = arr[2] + '!';
// // arr[0]++;
// // arr[1]--;
// // console.log(arr);
// // arr.length // длина массива
// // console.log(arr[arr.length - 1]); // последний элемент массива

// // Обьекты - objects
// // let car = {
// //     speed: 20,
// //     weight: 500,
// //     color: 'red'
// // };

// // let keys = Object.keys(car);
// // console.log(keys.length);


// // let obj = {
// //     '1': 'a',
// //     '2': 'b',
// //     '3': 'c'
// // };

// // //Примитивы: number, string, boolean, null, undefined, symbol, bigint
// // // Обьекты: [], {}

// // obj['1'] = 123;

// // let obj2 = obj;
// // console.log(obj2);

// // console.log('speed' in car);
// // car.color = "yellow";
// // // console.log(obj[1]);
// // console.log(car.color);
// // console.log(car[key]);
// // console.log(keys.length);


// let obj = { x: 1, y: 2, z: 3 };
// console.log(Object.keys(obj).length);
// // Создать обьект user, сделать ему 4 параметра(свойства-ключа) их значение, и вывести в консоль каждое свойство обьета и длину обьекта;


// let num = 2;
// let num2 = 5;
// // "==" эквивалетно  отрицанию "!=", "===" эквивалетно отрицанию "!=="
// // && - выполнение двух условий  || - выполнение одного условия

// if (num2 === 5 || num < 3) {
//     console.log(true);
// }
// else {
//     console.log(false);
// }

// let test = true;
// let test2 = true;
// num2 = "5";

// if (test && test2) { // if(test == true && test2 == true)
//     console.log(true)
//     if (num2 === 5) {
//         console.log("Да равно");
//     }
//     else {
//         console.log("Нет не равно");
//     }
// }

// let car = {
//     speed: 50,
//     color: 'red',
//     weight: 1000,
//     model: 'BMW'
// }

// switch (car.red) {
//     case car.red: // "red"
//         console.log("1");
//         if (car) {
//             console.log("Да, можно?")
//         }
//         break;
//     case car.red:
//         console.log("5")
//         break;
//     default:
//         console.log("Ваше значение не равно")
//         break;
// }


// let array = [1, 2, 3, 4,];
// let object = {
//     a: 1,
//     b: 2,
//     c: 3
// }

// let array2 = [
//     {
//         weight: 500,
//         color: "red"
//     },
//     "Hello world",
//     [
//         1, 2, 3, 4, 5
//     ],
//     2500
// ]

// let array3 = [
//     1, "Hello", 2, 4,
//     ['France', 'Gernamy', 'Spain'],
// ]

// for (let elem of array3) {
//     // console.log(elem);
//     let num = 10;
//     for (let elem2 of array3) {
//         // console.log(elem2);
//     }
// }

// for (let i = 0; i < array2.length; i++) {
//     console.log(array2[i]);
// }

// for (let elem of array2) {
//     console.log(elem);
// }


// let array10 = [];
// // let i = 0;

// for (let i = 0; i <= 10; i++) {
//     array10.push(i);
// }

// for (let i = 0; i < array10.length; i++) {
//     // array10[i] += 2;
//     array10[i] = array10[i] * 2;
// }


// console.log(array10);

// array10.forEach(elem => {
//     console.log(elem + "ForEach");
// })


// 18.09

// Задач 1
// let arr = ['a', 'b', 'c', 'd', 'e'];
// let obj = {};
// let i = 1; // необходимо для решения 1 и решения 3
// // Создать обьект следующего вида: {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};

// // Решение 1
// for (let elem of arr) {
//     obj[elem] = i;
//     i++;
// }
// // Решение 2
// for (let i = 0; i < arr.length; i++) {
//     // obj[i] = arr[i];
//     obj[arr[i]] = i + 1;
// }
// // Решение 3
// arr.forEach(elem => {
//     obj[elem] = i;
//     i++
// })
// console.log(obj);

// // Задача 2
// let employees = [
//     {
//         name: 'name1',
//         salary: 300,
//         age: 28,
//     },
//     {
//         name: 'name2',
//         salary: 400,
//         age: 29,
//     },
//     {
//         name: 'name3',
//         salary: 500,
//         age: 30,
//     },
//     {
//         name: 'name4',
//         salary: 600,
//         age: 31,
//     },
//     {
//         name: 'name5',
//         salary: 700,
//         age: 32,
//     },
// ];
// let sum = 0;

// // Решение 1
// employees.forEach(elem => {
//     if (elem.age >= 30) {
//         sum += elem.salary;
//     }
// })

// console.log(sum);

// // необходимо для обнуления, тк sum = 1800, после первого решения
// sum = 0;
// // Решение 2
// for (let elem of employees) {
//     if (elem.age >= 30) {
//         sum = sum + elem.salary;
//     }
// }

// console.log(sum);





// let student = {
//     firstName: 'Вася',
//     lastName: 'Пупкин',
//     age: 16,
//     sayFirstName() {
//         console.log('Имя: ' + this.firstName)
//     },
//     sayLastName: function () {
//         console.log(`Фамилия: ${this.lastName}`)
//     },
//     sayFullName: function () {
//         console.log(`Полное имя: ${this.lastName} ${this.firstName}`)
//     },
// }

// student.sayFirstName();
// // student.sayFullName();

// student.sayAge = function () {
//     console.log('Возраст ' + student.age);
// }

// student.sayAge();



// let students = {
//     'group1': ['student11', 'student12', 'student13'],
//     'group2': ['student21', 'student22', 'student23'],
//     'group3': ['student31', 'student32'],
// };

// students.group1.push('student14');

// students.group4 = [];

// students.group4.push('student41');

// console.log(students);

// let arr = [
//     [
//         [1, 2], [3, 4]
//     ],
//     [
//         [5, 6], [7, 8]
//     ]
// ];

// let sum = 0;

// for (let subArr of arr) {
//     for (let subArr2 of subArr) {
//         for (let elem of subArr2) {
//             sum += elem;
//             // console.log(elem);
//         }
//     }
// }
// console.log(sum);

// let arr2 = [];
// for (let i = 0; i < 3; i++) {
//     arr2[i] = [];
//     for (let j = 0; j < 2; j++) {
//         arr2[i].push([]);
//         for (let k = 0; k < 5; k++) {
//             arr2[i][j][k] = k + 1;
//         }
//     }
// }
// console.log(arr2)

// let students = {
//     'group1': ['student11', 'student12', 'student13'],
//     'group2': ['student21', 'student22', 'student23'],
//     'group3': ['student31', 'student32'],
// };

// students.group1.push('student14');

// console.log(students);


// 20.09.2023

// let num = '12345';
// let arr = String(num).split('');
// let sum = 0;

// function func1() {
//     for (let elem of arr) {
//         sum += Number(elem);
//     }
//     console.log(sum);
// }

// function func2() {
//     arr.forEach(function (item) {
//         sum += Number(item);
//     })
//     console.log(sum);
// }

// function func3() {
//     arr.map(function (item) {
//         sum += Number(item);
//     })
//     console.log(sum);
// }

// func1();
// func2();
// func3();

// function myFunc(num = 0) {
//     // тело функции
//     let num2 = 10;
//     console.log("Check");
//     console.log(num);
// }

// let param = 120;
// myFunc();

// function sumElems(num) {
//     let sum = 0;
//     let i = 0;
//     // for (let i = 0; i <= 100; i++) {
//     //     sum += i;
//     // }
//     // while (i <= 100) {
//     //     sum += i;
//     //     i++;
//     // }
//     // console.log(sum);

//     if (num % 2 == 0) {
//         console.log(true);
//     }
//     else {
//         console.log(false);
//     }
// }

// sumElems(2);



// function func(num) {
//     let i = 0;
//     while (num > 10) {
//         i++;
//         num /= 2;
//     }
//     return i;
// }

// console.log(func(200));

// function check(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == arr[i + 1]) {
//             return true;
//         }
//     }
//     return false;
// }

// console.log(check([2, 1, 1, 12]));


// 22.09.2023

let input = document.querySelector('#inputText');
let p = document.querySelector('p');

// document.querySelectorAll();

// События: "click", "dblclick", "mouseover", "mousedown", "focus", "blur", "keydown", "keyup"
// btn.addEventListener("click", function () {
//     document.querySelector('img').src = "img/cat.jpg"
//     console.log(this.value);
// })






// Задание 1
let inputs = document.querySelectorAll(".inputText")
let btn = document.querySelector('.inputBtn')
let sum = 0;

btn.addEventListener('blur', function () {
    // for (let i = 0; i < inputs.length; i++) {
    //     sum += Number(inputs[i].value);
    //     inputs[i].value = "";
    // }

    inputs.forEach(elem => {
        sum += Number(elem.value)
        elem.value = "";
    })

    p.textContent = "Сумма равна: " + sum;
})

// Задание 2
let inp = document.querySelector("#inp")
let buttonPlus = document.querySelector('.plus')
let buttonMinus = document.querySelector('.minus')

buttonPlus.addEventListener('click', plus)
buttonMinus.addEventListener('click', minus)

function plus() {
    let num = Number(inp.value) + 1;
    inp.value = num;
}

function minus() {
    let num = Number(inp.value) - 1;
    if (num < 0) {
        inp.value = 0;
    }
    else {
        inp.value = num;
    }
}




let form = document.querySelector('.form2');
let inputName = document.querySelector('.form2 input[name="name"]')
let inputPass = document.querySelector('.form2 input[name="password"]')
let inputButton = document.querySelector('.form2 input[type="button"]')


inputButton.addEventListener('click', () => {
    console.log('check')
    localStorage.setItem("name", inputName.value);
    localStorage.setItem("password", inputPass.value);

    setTimeout(clearLocalStorage, 5000);
})

function clearLocalStorage() {
    localStorage.clear()
}

// Задание
// input.addEventListener('blur', function () {
//     if (this.value) {
//         this.value = this.value.split(/\s+/).map(elem => elem[0].toUpperCase() + elem.slice(1)).join(' ');
//     }
// });

new Date(); // обьект дата
let year = 2023;
let month = 12;
let day = 30;
let date = new Date(year, month, day);
// new Date(year, month, date, hours, minutes, seconds, ms)
// console.log(date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate())
function addZero(num) {
    if (num >= 0 && num <= 9) {
        return '0' + num;
    } else {
        return num;
    }
}
// console.log(date.getFullYear() + '-' + addZero(date.getMonth() + 1) + '-' + addZero(date.getDate()))
let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

console.log(date.toDateString());
console.log(date.toLocaleString());

let str = "3045/12/05";
let newDate = str.split('/').reverse().join('-');
console.log(newDate);



















