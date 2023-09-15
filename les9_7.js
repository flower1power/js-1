/*
    Есть выгрузка операций пользователя
    const operations = [1000, -700, 300, -500, 10000];
    а так же начальный баланс в 100$
    Необходимо сделать функции расчета:
    - Итогового баланса
    - Наличия отрицательного баланса (если после очередной
        операции баланс < 0, то выдавать false)
    - Расчета среднего расхода и среднего дохода
*/

const operations = [1000, -700, 300, -500, 10000];
const startBalance = 100;
// let start = 100;

// for (let i = 0; i < operations.length; i++) {
//   start += operations[i];
// }

// console.log(start);

// const operations2 = [1000, -1700, 300, -500, 10000];
// start2 = 100;
// for (let i = 0; i < operations2.length; i++) {
//   start2 += operations2[i];
//   if (start2 < 0) {
//     console.log(false);
//     break;
//   }
// }
// console.log(start2);

function getBalance(arrOfOperations, initialBalance) {
  let balance = initialBalance;
  for (const element of arrOfOperations) {
    balance += element;
  }
  return balance;
}

console.log(getBalance(operations, startBalance));


function checkOperations(arrOfOperations, initialBalance){
  let balance = initialBalance;
  let isOk = true;
  for (const element of arrOfOperations) {
    balance += element;
    if (balance < 0){
      isOk = false;
      break
    }
  }
  return isOk;
}

console.log(checkOperations(operations, startBalance));

function avarageOperations(arrOfOperations) {
  let positiveCount = 0;
  let negativCount = 0;
  let positiveSumm = 0;
  let negativSumm = 0;
  for (const element of arrOfOperations) {
    if (element > 0) {
      positiveCount ++;
      positiveSumm +=element;
    }
    if (element < 0) {
      negativCount ++;
      negativSumm +=element;
    } 
  }
  return [positiveSumm / positiveCount, negativSumm / negativCount];
}

console.log(avarageOperations(operations, ));

for (let i = 1; i < 3; i++) {
  for (let j = 1; j < 3; j++) {
      console.log(i);
  }
}