const a = 5

let d: string[] = ['asd', 'asd'] // Только строки, т.к. мы определили тип заранее

function test1(a: string): string { // Фун-ция принимает строку (первое значение) и возвращает строку (второе значение)
    return ''
}

function test2(a: string): string | number { // Фун-ция принимает строку (первое значение) и возвращает строку или число (второе значение)
    return ''
}

const test3 = (a: number): number => {
    return a * 2
}

d = d.map((item) => item.toUpperCase()) // К переменной d мы применяем map и в map к item мы применяем методы которые характерны
// только для строк, т.к. d это строка и он видит это

function test4(params: { first: number, second?: string }) { // Здесь знак ? означает что вторая переменная может быть а может и не быть

}

function printIt(id: number | string) { // Здесь мы делаем проверку что нам поступит число или строка (safety)
    if (typeof id === 'number') {
        console.log(id.toString())
    } else if (typeof id === 'string') {
        console.log(id.toUpperCase())
    }
}
printIt('ghg')

function getSum(perem: number | number[]) {
    if (Array.isArray(perem)) {
        perem.map((item) => item.toFixed())
    } else if (typeof perem === 'number') {
        console.log(perem.toString)
    }
}

getSum(2)

function test5(perem: number): void { // void, т.е. ф-ция ничего не возвращает

}

//! КОГДА НУЖНА АННОТАЦИЯ (ОПРЕДЕЛЕНИЕ ТИПА)?

//? 1) КОГДА Ф-ЦИЯ ВОВРАЩАЕТ ТИП ANY (Т.Е. ЛИБОЕ ТИП ДАННЫХ) И НАМ НУЖНО ПОЛУЧИТЬ ОПРЕДЕЛЁННОЕ ЗНАЧЕНИЕ ИЗ НЕЁ
// ПРИМЕР

let x = JSON.parse('6') // Здесь ф-ция возвращает тип Any (любой) поэтому нам нужно заранее определить его

let y: number = JSON.parse('6')

//? 2) КОГДА ОБЪЯВЛЕНИЕ ПЕРЕМЕННОЙ И ПРИСВОЕНИЕ ЕЙ ЗНАЧЕНИЯ ПРОИСХОДИТ НА РАЗНЫХ СТРОЧКАХ
// ПРИМЕР

let isOdd: boolean;
let w = 5

if (w % 2 === 0) {
    isOdd = false
} else {
    isOdd = true
}

//? 3) КОГДА МЫ ХОТИМ ЧТОБЫ ТИП БЫЛ СЛОЖНОСОСТАВНОЙ И НЕ ОПРЕДЕЛЯЛСЯ АВТОМАТИЧЕСКИ
// ПРИМЕР 

type Example = string | number
let Example: string | number = 6

//! МАССИВЫ (Списки, кортежи (tuple))

// Преимущества использования статической типизации для массивов в том что мы заранее будем знать с каким типом данных мы работаем
// и мы не сможем к примеру добавить в массив другой тип данных

//? Списки

const arr: string[] = [] // Ожидаем что в нашем массиве будут только строки
arr.push(5) // Ошибка, т.к. мы определили тип данных массива как строки 

// Если мы хотим определить значение массивов в массиве, то применим след. вариант

const arr2: string[][] = []
arr2.push([22]) // Ошибка, т.к. хотим добавить массив с числами

// Если мы хотим сделать сложносоставной массив, то можно использовать псевдоним 

type Psevdonim = (string | number)
const arr3: Psevdonim[] = []
arr3.push('fsdf', 3, true) // Мы решили запушить строку, число и boolean (не определено заранее, поэтому ошибка)


//? Кортежи (tuple) предполагает собой что у него фиксированное кол-во элементов

const tuple1: [string, boolean, number] = ['abc', true, 5]

// Кортежи подходят для csv файлов (т.е есть строгое кол-во данных, которое будет содержаться к примеру в массиве)

type OrederData = [string, string, number]

const example4: OrederData[] = [
    ['str', 'st', 2]
]


//! ОБЪЕКТЫ

type Obj = {
    a: number,
    b: string,
    c: boolean
}

const obj1: Obj = {
    a: 1,
    b: 'sdfg',
    c: true
}

interface MyObject {
    readonly a: number, // Можно только читать данный ключ, перезаписывать не можем
    b: number,
    c?: string, // необязательное значение
    someMethod?: () => number, // Объявляем метод, который должен вернуть число (необязательный)
    [key:string]: number | string //? Можно добавлять в наш интерфейс  сколько угодно ключей определенного типа 
}

const obj2: MyObject = {
    a: 1,
    b: 2,
    c: 'true',
    fsdf: 'asdfas'
}

//! У интерфейсов есть возможность склеивания и наследования

interface Person {
    name: string;
}
interface Person {
    age: number;
}

interface Acc {
    email: string;
    login: string;
}

const NewPerson: Person = { // Теперь наш объект состоит из двух св-в (name и age)
    name: 'Egor',
    age: 18
}

interface DataPerson extends Acc, Person { // Наследование
    skills: string[]
}

const John: DataPerson = {
    name: 's',
    skills: ['ad', 'asd'],
    age: 18,
    email: 'fsd',
    login: 's'
}

//! Функции в TYPESCRIPT

const fn1= (num:number):string => {
    return String(num)
}

// Передача callback ф-ции

type Callback1 = (perem:string) => string

function fn(params:Callback1) {
    
}

fn((str)=>str.slice())

// Необязательные параметры (нужно совершить проверку на передачу)

type Callback2 = (num:number) => string

function fn2(cb?:Callback2) {
    if (cb === undefined) {
        cb = String
    }
    cb(12)
}

// Значения по умолчанию

function Somee(x:number = 0,y:number=0):[number,number] {
    return [x,y]
}

Somee(2,5)

// Варинат передачи REST оператора (...arr) - неограниченного массива

function fn3(...arr:number[]):number[] {
    return arr.map(item=>item**2)
}

//? Передача в ф-цию объектов

interface Pattern {
    label:string
}

function Example23(params:Pattern) {
    
}

const Obj3 = {
    label: 'sdfs',
    Age: 18
}

Example23(Obj3)

Example23({label: 'sdfs',Age: 18}) // т.е. в ф-цию мы не можем передать напрямую объект, который не соответствует интерфейсу Pattern 

//! Перегрузка ф-ций

// Суть заключается в том что мы можем принимать в ф-цию сразу несколько переменных разных типов и обрабатывать их

function pickCard(x:number | {suit:string; card:number}[]):{suit:string; card:number} | number{
    
} // Данный вариант слишком длинный, можно записать по другому

//? Мы можем написать принимаемые параметры ф-ции в несколько строк

//! Есть нюанс, если в ф-ции один параметр (params) значит он и везде должен быть один
//! и сколько раз мы дописали ф-цию, столько раз мы должны её проверить

function Jik(x:number):{key1:string;key2:number};
function Jik(x:{key1:string;key2:number}[]):number;
function Jik(x) : any{
    if(typeof x === 'object')
    {
        console.log('object')
    } else if(typeof x === 'number')
    {
        console.log('number')
    }
}
Jik([{key1='dfg',key2:2}])

//! TYPE СОЕДИНЕНИЕ В ОДИН TYPE

type One = {
    name: 's',
    skills: ['ad', 'asd'],
}

type Two = {
    age: 18,
    email: 'fsd',
}

type Tree = {
    login: 's'
}

type total = One & Two & Tree; // Объединяем в один type все наши 3

const ArrTotal: total[] = [] // Добавили нашу сумму в массив 

// TYPE and interface

type Coordinats = { // Обявляем тип переменных и передаёмм его в ф-цию example
    x: number,
    y: number
}

type NewCoordinat = Coordinats & { // Экстендим в NewCoordinat значения которые содяржатся в Coordinats
    z: number
}

function example1(params: NewCoordinat) {

}

type Coord = string | number // В данном случае полезны типы, когда мы объявляем например тип переменной

function example2(params: Coord) {

}

interface Cordinats {
    x: number,
    y: number
}
interface ZCordinats extends Coordinats { // Экстендим в ZCordinats значения которые содяржатся в Cordinats
    z: number
}

function example7(perem: Cordinats) {
    const d: ZCordinats = perem as ZCordinats //???
}

function example3(params: ZCordinats) {

}

//! Отличие интерфейсов от тайпов в том что в интерфейсы можно добавлять св-ва, например:

interface test6 {
    a: number
}
interface test6 {
    b: number     // т.е. мы дополняем интерфейсы друг другом 
}

const c = (point: test6) => {
    const d:
}