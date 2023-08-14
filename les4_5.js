//! Типы данных
//* Примитивные типы
const age = 18; //? числа
console.log(typeof age);

const surname = 'Иванов'; //? Строки
const surname2 = "Иванов"; //? Строки
const surname3 = `Иванов`; //? Строки
console.log(typeof surname);

const isAdmin = true; //? true или false
console.log(typeof isAdmin);

const isAdmin2 = undefined; //? Не заданное значение
console.log(typeof isAdmin2);

let data; //? Не заданное значение
console.log(typeof data);

let data2= null; //? Пустое значение
console.log(typeof data2); 

const admin = Symbol('Admin'); //? Уникальное неизменное значение
console.log(typeof admin);

const big = BigInt(9999999999999999999); //? Большие числа
console.log(typeof big);