/* Задача вывести в консоль строку "Я люблю JS !" из массива,
проходя циклом в обратном порядке, не используя метод reverse.
const arr = ['!', 'JS', 'люблю', 'Я'];
*/

const arr = ['!', 'JS', 'люблю', 'Я'];
// console.log(arr.length);
// console.log(arr.at(-1));
// console.log(arr.at(-2));
// console.log(arr.at(-3));
// console.log(arr.at(-4));

//? мое решение
arr2 = []
for (let i = -1; i > -5 ; i-- ) {
  arr.at(i);
  arr2.push(arr.at(i));
}
arr2 = arr2.join(' ');
console.log(arr2);


//? Решение преподавателя
const resultArray = [];
for (let i = arr.length -1; i >= 0 ; i-- ) {
  resultArray.push(arr[i]);
}
console.log(resultArray.join(' '));


//? Если можно revers
console.log(arr.reverse().join(' '))

