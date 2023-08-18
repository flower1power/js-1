//! Шаблонные строки

const projectName = 'Сайт магазина';
const price = 2000;
const author = 'Василий Пупкин';

const templare = author + ' заказал ' + projectName + ' по цене ' + price + '$';
console.log(templare);

const templare2 = `${author} заказал ${projectName} по цене ${price}$`;
console.log(templare2);

const templare3 = 'Проект \n' + 'Цена: ' + price + '$';
console.log(templare3)

const templare4 = `Проект
Цена: ${price}$`;
console.log(templare4)
