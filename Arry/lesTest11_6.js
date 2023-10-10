/*
	Найти среднее значение последовательности
	чисел с помощью reduce
 */

const arr = [1, 4, 4, 10];
console.log(arr.length);

const avg = arr.reduce((acc, el, index) => {
  if (index !== arr.length - 1) {
    return acc + el;
  } else {
    return (acc + el) / arr.length;
  }
}, 0);

console.log(avg);

const res = arr.reduce((acc, value) => {
  return acc + value / arr.length;
}, 0);

console.log(res);
