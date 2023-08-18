//! Операторы равенства

const secretNumber = '7';

if (secretNumber === 7) {
  console.log('Угадал значение и тип')
}

if (secretNumber == 7) {
  console.log('Угадал знчение')
}

//? Хорошая практика
if (Number(secretNumber) === 7) {
  console.log('Угадал значение и тип')
}

//? Пример из практики
const q = Number(prompt('Введите число'));
if (q === 7) {
  console.log('Угадал значение и тип')
}