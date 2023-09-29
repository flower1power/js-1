const userName = 'Вася Пупкин';
console.log(userName);
console.log(userName[1]);
console.log(userName.charAt(2));

console.log(userName.length);
//? Первое встречающееся значение буквы
console.log(userName.indexOf('уп'));

//? Последнее встречающееся значение буквы
console.log(userName.lastIndexOf('П'));

//? Проверяет наличие
console.log(userName.includes('уп'));

//? Обрезает текст с какого-то индекса до какого-то индекса
console.log(userName.slice(4, 8));
