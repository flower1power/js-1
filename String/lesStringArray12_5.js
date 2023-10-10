const userFulName = 'Вася Пупкин Васильевич';
//? Получаем массив разбитый по указанному символу
console.log(userFulName.split(' '));
//? Создаем массив и присваиваем ему значения через сплит
const [firstName, FamilyName, lastName] = userFulName.split(' ');
console.log(firstName);
console.log(FamilyName);
console.log(lastName);

const arr = ['Ты', 'Знаешь', 'JS'];
//? Объединяет массив в строку
console.log(arr.join(' '));

//? Изменяет строку на нужное количество символов и может добавить указанные
const film = 'Звездные Войны';
console.log(film.padStart(50, '*'));
console.log(film.padEnd(50, '*'));

console.log(film.repeat(10));
