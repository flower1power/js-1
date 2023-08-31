/*
Методом prompt получите ответ пользователя
на вопрос "Сколько будет 7 + или - 15?". Если ответ верен
выведите в консоли "Успех", если нет - "Вы робот!"
а если он введёт "Я не робот", то тоже "Успех".
*/

const res = prompt('Сколько будет 7 + или - 15?');

//! Мое решение
switch (res) {
  case '22':
    console.log('Успех');
    break
  case '-8':
    console.log('Успех');
    break
  case 'Я не робот':
    console.log('Успех');
    break
  default:
    console.log('Вы робот!')
}

//? Решение преподавателя
switch (true) {
  case res === 'Я не робот':
  case Number(res) === 22:
  case Number(res) === -8:
    console.log('Успех');
    break;
  default:
    console.log('Вы робот!')
}

//! Мое решение
if (res == '22'){
  console.log('Успех');
}else if (res == '-8'){
  console.log('Успех');
}
else if (res == 'Я не робот'){
  console.log('Успех');
}
else {
  console.log('Вы робот!')
}

//! Мое решение
let result = res == '22'  
  ? 'Успех'
  : res == '-8' ? 'Успех'
  : res == 'Я не робот' ? 'Успех'
  : 'Вы робот!'

console.log (result);

//! Мое решение
if (Number(res) === 22 || Number(res) === -8 || res === 'Я не робот'){
  console.log('Успех');
}else {
  console.log('Вы робот!')
}