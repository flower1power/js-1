/*
  Имеется массив изменения цен prices, где внутри
  1й элемент массива является ценой в момент Х,
  2й - ценой в момент Y.
  Нужно преобразовать данные в массив, где будут отображены
  только положительные изменения цен: [100, 150]
*/

const prices = [[100, 200], [120, 100], [200,350]];

//? МОЕ
const result = prices
  .map((price) => price[1] - price[0])
  .filter(positive => positive > 0)

console.log(result);

//? В комментах
  const itog = prices
  .map(([price1, price2]) => price2 - price1)
  .filter(delta => delta > 0);

console.log(itog)

//? Преподаватель
const result2 = prices
  .map(product => product[1] - product[0])
  .filter(price => price > 0)

console.log(result2);
