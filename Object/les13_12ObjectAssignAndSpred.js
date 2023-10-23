const user = {
  name: 'Anton',
  id: 1,
  roles: ['Admin'],
};

//? Object.assign ,берет пустой массив и соединяет с объектом и присваивает переменной
// const newUser = Object.assign({}, user);
// user.name = 'NewUserName';
// console.log(user);
// console.log(newUser);

//? Создаем новый объект из существующего объекта
const newUser2 = {
  ...user,
};
newUser2.name = 'NewUserName';
newUser2.roles.push('User');

console.log(user);
console.log(newUser2);
