'use strict';

// let, var, const, func, arguments
// Scope chain
// this

function sumNum(num1, num2) {
  console.log(this);
  console.log(arguments);
  return num1 + num2;
}

console.log(sumNum(1, 3, 4, 7));

//? В стрелочной функции нельзя получить arguments
const sumNumArr = (num1, num2) => {
  console.log(this);
  console.log(arguments);
  return num1 + num2;
};
console.log(sumNumArr(1, 3, 4, 7));
