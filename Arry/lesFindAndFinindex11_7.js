const arr = [2, 4, 4, 10, 20];

let elGT5;
// for (const el of arr) {
//   if (el > 5) {
//     elGT5 = el;
//     break;
//   }
// }
// console.log(elGT5);

//? Ищет первый верный элемент
elGT5 = arr.find((el) => el > 5);
console.log(elGT5);
//? Возвращает индекс верного элемента (если элемента нет, то вернет -1)
elGT5Index = arr.findIndex((el) => el > 5);
console.log(elGT5Index);
