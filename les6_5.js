/*
Пользователь хочет приобрести игру в магазине. Он может это сделать только если:
- Eго баланс больше 1000 (balance) 
или число бонусов больше 100 (bonusBalance)
- Он не забанен (isBanned)
- Игра не куплена (isExist)
- Игра в продаже (isSelling)
Напишите условие для покупки и выведите в консоль результат.
*/

let balance;
let bonusBalance;
let isBanned;
let isExist;
let isSelling;

balance = 1200
bonusBalance = 90
isBanned = false
isExist = false
isSelling = true


const canBuy = (
  (balance > 1000 || bonusBalance > 100)
  && !isBanned
  && !isExist
  && isSelling
)

console.log (`Могу купить игру: ${canBuy ? 'Да' : 'Нет'}`);




console.log('' ?? 'Yes')