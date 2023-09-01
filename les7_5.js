//! Параметры по умолчанию

//? Плохой вариант
function toPower(num, power) {
  power = power ?? 2; // если 1 значение null или undefinde, то используем 2
  const res = num ** power;
  return res;
}

console.log (toPower(2, 3));
console.log (toPower(2));

//? Правильный вариант
function toPower2(num, power = 2) {
  const res = num ** power;
  return res;
}

console.log (toPower2(2, 3));
console.log (toPower2(2));
