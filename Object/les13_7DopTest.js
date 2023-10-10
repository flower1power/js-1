const wallet3 = {
  balance: 0,
  operations: [],
  increase: function (sum, reason) {
    this.balance += sum;
    this.operations.push({
      reason,
      sum,
    });
    return true;
  },
  decrease: function (sum, reason) {
    if (this.balance < sum) {
      console.log('Недостаточно баланса');
      return false;
    }
    this.balance -= sum;
    this.operations.push({
      reason,
      sum: -sum,
    });
    return true;
  },
  getOperationsLength: function () {
    return this.operations.length;
  },
};

console.log(wallet3.increase(1000, 'Зарплата'));
console.log(wallet3.getOperationsLength());
console.log(wallet3.decrease(2000, 'Покупка'));
console.log(wallet3.getOperationsLength());
console.log(wallet3.decrease(500, 'Покупка меньше'));
console.log(wallet3.getOperationsLength());
console.log(wallet3.balance);
console.log(wallet3.operations);

const balance = 7;
const wallet4 = {
  balance,
  operations: [],
};
