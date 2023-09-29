/* вытащить имя и фамилию в отдельные переменные */

// const userName = "Вася aka Terminator Predator Пупкин";
//
// // const fullUserName = "Вася aka Terminator Пупкин";
//
// const name = userName.slice(0, 4);
// const surName = userName.slice(-6);
//
// console.log(name);
// console.log(surName);

const fullUserName = "Вася aka Terminator Predator Пупкин";

const userName = fullUserName.slice(0, fullUserName.indexOf(" "));
console.log(userName);

const userSurName = fullUserName.slice(
  fullUserName.lastIndexOf(" ") + 1,
  fullUserName.length
);
console.log(userSurName);
