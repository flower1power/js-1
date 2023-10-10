//? Объект - набор ключ - значение
const user = {
  name: 'Вася',
  surname: 'Пупкин',
  age: 24,
  skills: ['Программирование', 'Готовка'],
  eduBasic: 'Школа 10',
  eduPro: 'МФТИ',
};

console.log(user);
console.log(user.name);
console.log(user.surname);
console.log(user.age);
console.log(user.skills);
console.log(user.skills[0]);
console.log(user.skills[1]);

//? Доступно для расчетных свойств
console.log(user['skills']);

const level = 'Pro';
console.log(user['edu' + level]);

// const res = prompt('Введите свойство объекта');
// console.log(user[res]);

//? Добавление свойств
user.city = 'Москва';
user['city'] = 'Москва';
console.log(user);

//? Изменение данных
user.age = 30;
user['age'] = 30;
console.log(user);
