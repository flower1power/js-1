/*
  Пользователь:
  -Возраст
  -Наличие работы
  -Деньги
  Нужно проверить может ли он купить новый MacBook за 2000$?
  Он может брать не только свои деньги, но и взять кредит.
  Ему дадут 500$, только если ему больше 24-х лет и он
  имеет работу, 100$ если ему просто больше 24-х лет и 0 в
  ином случае.
  Напишите функцию, которая принимает данные пользователя
  и товара и возвращает true или false.
*/

//1 кредит
//2 тру или фолс


//? мое решение
const age = 24;
const job = false;
const cash = 2000;
const priceMac = 2000;

function approveCredit (age, job = false) {
  if (age > 24 && job == true) {
    return Number(500);
  }
  else if (age > 24) {
    return Number(100);
  } else {
    return Number(0);
  }
}

function canByMacBook (age, job, cash = 0, priceMac) {
  const by = priceMac - cash - approveCredit(age, job);
  if (by <= 0) {
    return true
  } else {
    return false
  }
}

console.log (canByMacBook(age, job, cash, priceMac))

//? Решение правильное

function computeCredit (age2, hasJob = false) {
  switch (true) {
    case age2 > 24 && hasJob:
      return 500;
    case age2 > 24:
      return 100;
    default:
      return 0;
  }
}

function canBy(productPrice, age2, money, hasJob = false) {
  const creditMoney = computeCredit (age2, hasJob);
  return productPrice <= money + creditMoney;
}

console.log(canBy(2000,25,1500, true));



