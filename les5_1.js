//! If else

const money = 100;
// const canBuy = money > 50;

/*  Условие всегда преобразуется в Boolean
    Выполняется только при True
    Условия взаимоисключаемые и выполнится первое верное
*/

if (money > 50) {
  console.log('Может купить наш продукт');
} else if (money > 5) {
  console.log('Куплен mini продукт')
} else {
  console.log('Не хватает баланса');
}

console.log('Итог');