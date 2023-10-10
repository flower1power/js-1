/* Реализовать методы увеличения и уменьшения баланса,
  при котором каждая операция сохраняется в массив
  operations в виде {reason: 'Оплата налогов', sum: -100}.
  Возвращается true, если успешно и false, если не хватает баланса.
  Также реализовать метод вывода числа операций по кошельку
  */

const wallet = {
  balance: 0,
  operations: [],
  increaseBalance: function (amount) {
    this.operations.push({
      reason: 'Пополнение баланса',
      sum: amount,
    });
    this.balance += amount;
    return true;
  },
  decreaseBalance: function (amount) {
    if (this.balance >= amount) {
      this.operations.push({
        reason: 'Оплата',
        sum: -amount,
      });
      this.balance -= amount;
      return true;
    } else {
      return false;
    }
  },
  getNumOfOperations: function () {
    return this.operations.length;
  },
};

// wallet.increaseBalance(100);
// wallet.decreaseBalance(150);
// console.log(wallet.balance);
// console.log(wallet.getNumOfOperations());
// console.log(wallet);

//? решение преподавателя

const wallet2 = {
  balance: 0,
  operations: [],
  increase: function (sum, reason) {
    this.balance += sum;
    this.operations.push({
      reason: reason,
      sum: sum,
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
      reason: reason,
      sum: -sum,
    });
    return true;
  },
  getOperationsLength: function () {
    return this.operations.length;
  },
};

console.log(wallet2.increase(1000, 'Зарплата'));
console.log(wallet2.getOperationsLength());
console.log(wallet2.decrease(2000, 'Покупка'));
console.log(wallet2.getOperationsLength());
console.log(wallet2.decrease(500, 'Покупка меньше'));
console.log(wallet2.getOperationsLength());
console.log(wallet2.balance);
console.log(wallet2.operations);
