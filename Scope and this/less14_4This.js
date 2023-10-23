'use strict';

console.log(this);

//? this в функции всегда undefined
function addNum(num1, num2) {
  console.log(this);
  return num1 + num2;
}
addNum();

//? this в стрелочной функции берет this родителя
const addNum2 = (num1, num2) => {
  console.log(this);
  return num1 + num2;
};

addNum2();

//? this указывает на объект у которого вызвана
const user = {
  name: 'Vasa',
  surname: 'Pupkin',
  getFullName: function () {
    console.log(this);
    return this.name + ' ' + this.surname;
  },
};
user.getFullName();

const user2 = {
  name: 'Марина',
  surname: 'Катц',
};

user2.getFullName = user.getFullName;
user2.getFullName();
