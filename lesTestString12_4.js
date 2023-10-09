/* Задание: проверить является ли это номером телефона России */
/* верные */
const num1 = '89103235356';
const num2 = '+79103235356';
const num3 = '+7(910)3235356';
const num4 = '+7(910) 323-53-56';
const num5 = ' +7(910) 323-53-56 ';
/* не верные */
const num1Error = '89103235';
const num2Error = '+7d910d323-53-56';
const num3Error = '9+7103235356';
const num4Error = '89103g35356';

// console.log(isNaN(Number('9')));

//! Мое решение
function isNumber(number) {
  number = number.trim();
  const formatterNumber = number
    .replace('+7', '8')
    .replaceAll('(', '')
    .replaceAll(')', '')
    .replaceAll('-', '')
    .replaceAll(' ', '');

  if (formatterNumber.length !== 11) {
    // console.log(`${formatterNumber} не имеет длину 11`);
    return false;
  }
  if (formatterNumber.startsWith('8') !== true) {
    // console.log(`${formatterNumber} не начинается с 8`);
    return false;
  }
  if (isNaN(Number(formatterNumber)) !== false) {
    return false;
  }
  return true;

  // switch (true) {
  //   case formatterNumber.length !== 11:
  //     console.log(`${formatterNumber} не имеет длину 11`);
  //     break;
  //   case formatterNumber.startsWith('8') !== true:
  //     console.log(`${formatterNumber} не начинается с 8`);
  //     break;
  //   case isNaN(formatterNumber) !== false:
  //     console.log(`${formatterNumber} имеет в наличии символы`);
  //     break;
  //   default:
  //     return console.log(`${formatterNumber} является Российским номером`);
  // }
}

console.log(isNumber(num1));
console.log(isNumber(num2));
console.log(isNumber(num3));
console.log(isNumber(num4));
console.log(isNumber(num5));
console.log(isNumber(num1Error));
console.log(isNumber(num2Error));
console.log(isNumber(num3Error));
console.log(isNumber(num4Error));

//! Преподаватель
function isPhoneNumber(num) {
  num = num.trim();
  num = num.replace('+7', '8');
  if (!num.startsWith('8')) {
    return false;
  }
  num = num.replaceAll('(', '');
  num = num.replaceAll(')', '');
  num = num.replaceAll(' ', '');
  num = num.replaceAll('-', '');
  if (num.length !== 11) {
    return false;
  }
  let onlyNumber = true;
  for (const char of num) {
    if (isNaN(Number(char))) {
      onlyNumber = false;
      break;
    }
  }
  return onlyNumber;
}

console.log(isPhoneNumber(num1));
console.log(isPhoneNumber(num2));
console.log(isPhoneNumber(num3));
console.log(isPhoneNumber(num4));
console.log(isPhoneNumber(num5));
console.log(isPhoneNumber(num1Error));
console.log(isPhoneNumber(num2Error));
console.log(isPhoneNumber(num3Error));
console.log(isPhoneNumber(num4Error));
