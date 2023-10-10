//!Reduce

const operations = [100, -20, 7, -30, 50];

let balance = 0;
for (const operation of operations) {
  balance += operation;
}

console.log(balance);

const finalBalance = operations.reduce((acc, operation, index) => {
  console.log(`Итерация ${index}, acc: ${acc}, operation ${operation}`);
  return (acc += operation);
}, 0);

console.log(finalBalance);

const minElement = operations.reduce((acc, operation) => {
  if (operation > acc) {
    return acc;
  } else {
    return operation;
  }
}, 0);

console.log(minElement);

//? 0 - acc = 0, operation = 100
//? 1 - acc = 100, operation = -20
/*
    Итерация 0, acc: 0, operation 100
    Итерация 1, acc: 100, operation -20
    Итерация 2, acc: 80, operation 7
    Итерация 3, acc: 87, operation -30
    Итерация 4, acc: 57, operation 50
*/
