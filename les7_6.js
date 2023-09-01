//! Условия в функциях

function canAccessWebsite(age) {
  if (age < 18) {
    return 'Нет';
  }
  return 'Да';
}

console.log(canAccessWebsite(18));

//? стрелочная функция + тернарный оператор
const canAccessWebsite2 = age => age < 18 ? 'Нет' : 'Да';

console.log(canAccessWebsite(18));