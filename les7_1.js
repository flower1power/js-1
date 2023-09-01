//!ВВедение в вункции

function logName(name, surname) {
  console.log(`Мое имя ${name} ${surname}`);
}

logName('Виктор', 'Лобынцев')
logName('Виктор', 1)


// function countDepositSum(deposidInUSD, month, rate) {
//   const sum = deposidInUSD * (1 +rate / 12) ** month;
//   return sum;
// }

function countDepositSum(deposidInUSD, month, rate) {
  return deposidInUSD * (1 +rate / 12) ** month;
  
}

const example1 = countDepositSum(1000, 24, 0.12);
console.log(example1);

console.log(countDepositSum(1000, 48, 0.10));

