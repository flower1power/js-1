//! Тернарные операторы
const bmwx3Price = 100000;
const fordFocusPrice = 10000;
const budget = 20000;

// let message;
// if (budget > bmwx3Price) {
//   message = 'BMW';
// } else if (budget > fordFocusPrice) {
//   message = 'Ford';
// } else {
//   message = 'Велосипед';
// }

//? Пробуем заменить if (вложенные лучше не использовать)
let message = budget > bmwx3Price 
    ? 'BMW' 
    : budget > fordFocusPrice ? 'Ford' : 'Велосипед';

console.log(`Я хочу купить ${message}`);


// if (budget > bmwx3Price) {
//   message = 'BMW';
// } else {
//   message = 'Велосипед';
// }
//? Пробуем заменить if
console.log(`Я хочу купить ${budget > bmwx3Price ? 'BMW' : 'Велосипед'}`)


//? Пример сокращения короткого if
10 > 0 ? console.log('Больше 0') : console.log('Не больше 0');
//*  10 > 0 - аналог условия if
//* console.log('Больше 0') - Действия if
//* console.log('Не больше 0') - Действия else

//? Выбор что присвоить перемоенной
const str = 10 > 0 ? 'Больше 0' : 'Не больше 0';
console.log(str)