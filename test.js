"use strict";
const a = 5;
let d = ['asd', 'asd']; // Только строки, т.к. мы определили тип заранее
function test1(a) {
    return '';
}
function test2(a) {
    return '';
}
const test3 = (a) => {
    return a * 2;
};
d = d.map((item) => item.toUpperCase()); // К переменной d мы применяем map и в map к item мы применяем методы которые характерны
// только для строк, т.к. d это строка и он видит это
function test4(params) {
}
function printIt(id) {
    if (typeof id === 'number') {
        console.log(id.toString());
    }
    else if (typeof id === 'string') {
        console.log(id.toUpperCase());
    }
}
printIt('ghg');
function getSum(perem) {
    if (Array.isArray(perem)) {
        perem.map((item) => item.toFixed());
    }
    else if (typeof perem === 'number') {
        console.log(perem.toString);
    }
}
getSum(2);
function test5(perem) {
}
// КОГДА НУЖНА АННОТАЦИЯ?
// 1) КОГДА Ф-ЦИЯ ВОВРАЩАЕТ ТИП ANY (Т.Е. ЛИБОЕ ТИП ДАННЫХ) И НАМ НУЖНО ПОЛУЧИТЬ ОПРЕДЕЛЁННОЕ ЗНАЧЕНИЕ ИЗ НЕЁ
// ПРИМЕР
let x = JSON.parse('6'); // Здесь ф-ция возвращает тип Any (любой) поэтому нам нужно заранее определить его
let y = JSON.parse('6');
// 2) кОГДА ОБЪЯВЛЕНИЕ ПЕРЕМЕННОЙ И ПРИСВОЕНИЕ ЕЙ ЗНАЧЕНИЯ ПРОИСХОДИТ НА РАЗНЫХ СТРОЧКАХ
// ПРИМЕР
let isOdd;
let w = 5;
if (w % 2 === 0) {
    isOdd = false;
}
else {
    isOdd = true;
}
let Example = 6;
function example1(params) {
}
function example2(params) {
}
function example7(perem) {
    const d = perem;
}
function example3(params) {
}
const c = (point) => {
    const d;
};
