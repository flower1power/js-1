//! map

const transactionInUSD = [10, -7, 50, -10, 100];

const transactionInRUB = [];
for (const transaction of transactionInUSD) {
  transactionInRUB.push(transaction * 60);
}

console.log(transactionInRUB);
console.log(transactionInUSD);

// const transactionInRUB2 = transactionInUSD.map((transaction, i) => {
//   return transaction * 60;
// });

const transactionInRUB2 = transactionInUSD.map(
  (transaction, i) => transaction * 60
);

console.log(transactionInRUB2);
console.log(transactionInUSD);

let arr = [1, 2];
let res = arr.map((e) => e * 2).filter((e) => e > 3);
console.log(res);
