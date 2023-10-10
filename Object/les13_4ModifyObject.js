/* преобразовать пользователей до вида
  {fullName: 'Вася Пупкин', skillNum: 2}
*/

const users = [
  {
    name: 'Вася',
    surname: 'Пупкин',
    age: 30,
    skills: ['Разработка', 'DevOps'],
  },
  {
    name: 'Катя',
    surname: 'Белова',
    age: 18,
    skills: ['Дизайн'],
  },
];

//? Создание нового массива с объектами используя MAP и данные старого массива с объектами
const userData = users.map((user) => {
  return {
    fullName: `${user.name} ${user.surname}`,
    skillNum: user.skills.length,
  };
});

console.log(userData);
console.log(users);
