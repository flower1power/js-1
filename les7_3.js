//! Стрелочные функции

function powerOfTwo(num) {
  console.log (num);
  return num * num;
}

console.log (powerOfTwo(5));

//? стрелочгая функция
//? удобно для небольших функций
//? таже проблема с всплытием - нельзя вызвать до обьявления
//? нет всплытия
//? нет контекста
const poft = num => num * num;
console.log (poft(6));

//? если нужно больше 1 строки
const poft2 = (num, num2) => {
  console.log (num);
  return num * num2;
}
console.log (poft2(7,2));