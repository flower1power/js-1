//? по Массиву
const arr = [1, 3, 4];
const [z, y, x] = arr;
console.log(y);

//? По объекту
let user = {
  name: 'Вася',
  age: 40,
  city: 'Moscow',
};

// const { age, name } = user;
// console.log(age);
// console.log(name);

//? Через ... можно брать только нужное и оставлять все остальное
const { age, ...userWithouAge } = user;
console.log(age);
console.log(userWithouAge);

const additionalData = {
  skills: ['Разработка', 'Дизайн'],
  creditCard: '2345-2345-2345-2345',
};

//? Обогащение объекта
// user.skills = additionalData.skills;
// user.creditCard = additionalData.creditCard;
// console.log(user);

// сказали что надо взять все свойства от user и additionalData
user = {
  ...user,
  ...additionalData,
};
console.log(user);
