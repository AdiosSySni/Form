// "use strict"

// let a, b, c;
// a = "a";
// b = "b";
// c = "c";

// /* комментарий */
// // комментарий
// // alert("Hello world");
// let sum;

// let num1; // обьявили переменную
// num1 = 2; // присовили ей значение

// let num2 = 15; // обьвили и присвоили значение переменной
// console.log(num2);
// num2 = 20;
// console.log(num2);

// sum = num1 + num2 / (2 * 3) - 1;
// let sum2;
// num1 = 5;
// num2 = 10 ** 2;

// let str = `123123 ${num1}`;

// console.log(str.length);
// let param = null;
// let str2 = "abcdefg";
// console.log(str2[str2.length - 1]);

// let test = '123456';
// console.log();

// let num3 = 0;

// document.write(num3);
// console.log(num3++);

// let name = prompt('Ваше имя?');
// alert("Ваше имя" + ' ' + name);

// // Ключевые слова
// // undefined, null, true, false, NaN.


let array10 = [
    "Hello",
    country = {
        1: "Spain",
        2: "Russia",
        3: 'Germany'
    },
    'people'
]

for (let elem of array10) {
    console.log(elem);
    for (let keys of elem[2]) {
        console.log(keys);
    }
}