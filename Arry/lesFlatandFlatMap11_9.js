const prices = [
  [2, 4],
  [3, 4],
  [10, [20, 50]],
];
const res = prices.flat();
console.log(res);

const res2 = prices.flat(2);
console.log(res2);

const res3 = prices.flatMap((el) => el.concat([1]));
console.log(res3);
