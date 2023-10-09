const userFulName = 'Вася Пупкин Васильевич';
//? Получаем массив разбитый по указанному символу
console.log(userFulName.split(' '));
//? Создаем массив и присваиваем ему значения через сплит
const [firstName, FamilyName, lastName] = userFulName.split(' ');
console.log(firstName);
console.log(FamilyName);
console.log(lastName);

const arr = ['Ты', 'Знаешь', 'JS'];
console.log(arr.join(' '));
