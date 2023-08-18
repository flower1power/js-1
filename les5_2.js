/*
    Васи положил 12 000$ на вклад 7% годовых с
    капитализацией 1 раз в месяц.
    Вывести в консоль, сможет ли он купить дом за 13 500$
    через 2 года после снятия вклада. И остаток после покупки.

    Итог = Сумма * (1 + Ставка в месяц не в %) ^ срок в месяцах
*/
const summ = 12000;
const rate = 0.07;
const ratePerMonth = rate/12;
const periodPerMonth = 2 * 12;
const priceHouse = 13500;


const total = summ * (1 + ratePerMonth) ** periodPerMonth;

if (total > priceHouse) {
  console.log(` Мы накопили: ${total}. Может купить. Остаток ${total - priceHouse}`)
} else {
  console.log(`Не может купить. Не хватает ${priceHouse - total}`)
}
