/* Отсортировать пользователей по возрасту */

const users = [
  { name: 'Вася', age: 30 },
  { name: 'Катя', age: 18 },
  { name: 'Аня', age: 40 },
  { name: 'Петя', age: 25 },
];

//! < 0 - a, b - сохраняем порядок
//! > 0 - a, b - меняем порядок
console.log(
  users.sort((a, b) => {
    return a.age - b.age;
  })
);
