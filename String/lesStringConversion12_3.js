const str = 'Вася Пупкина';
console.log(str);
//? Проверяет наличие символа
console.log(str.includes('а'));
//? Проверяет начинается ли строка с этого символа
console.log(str.startsWith('а'));
//? Проверяет заканчивается ли строка с этого символа
console.log(str.endsWith('а'));

//! Не модифицируют исходный объект
//? Все с маленькой буквы
console.log(str.toLowerCase());
//? Все с большой буквы
console.log(str.toUpperCase());
//? Заменяет первое вхождение элемента
console.log(str.replace('В', 'Ф'));
console.log(str.replace('а', 'и'));
//? Заменяет все вхождения
console.log(str.replaceAll('а', 'и'));
//? Аналог, если не позволяет использовать прошлую
console.log(str.replace(/а/g, 'и'));

const str2 = ' Вася Пупкина   \nИ';
//? Удаляет пробелы
console.log(str2.trim());
console.log(str2.trimEnd());
console.log(str2.trimStart());

console.log(String('Вася Пупкин').includes('а'));
