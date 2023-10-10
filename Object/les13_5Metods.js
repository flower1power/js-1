//? Если в объекте указываем this то обращаемся к элементу имнно этого обьекта

const user = {
  name: 'Вася',
  surname: 'Пупкин',
  age: 24,
  getFullName: function () {
    return this.name + ' ' + this.surname;
  },
};

console.log(user.getFullName());

const arr = [1, 2];
arr.sort();
'234SEEKSD234'.toLowerCase();

// function getFullName2(user) {
//   return user.name + ' ' + user.surname;
// }
//
// const  getFullName3 = function (user) {
//   return user.name + ' ' + user.surname;
// }
// console.log(getFullName(user));
