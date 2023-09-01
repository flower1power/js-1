//! Анонимные функции

function powerOfTwo(num) {
  return num * num;
}

console.log(powerOfTwo(5));



//? Функцию назначили на переменную
//? нет всплытия
const poft = function (num) {
  return num * num;
}

console.log(poft(6));