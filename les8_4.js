//! Slice, splice, concat, reverse

const roles = ['user', 'admin', 'manager', 'superuser'];

//? Отрезает но не модифицирует массив
const res = roles.slice(2);
console.log(roles);
console.log(res);

const res2 = roles.slice(0, 2);// второй аргумент не включается
console.log(res2);

const res3 = roles.slice(-1);
console.log(res3);

const res4 = roles.slice(1, -1);
console.log(res4);
console.log(roles);

//? Отрезает и модифицирует исходный массив
// const res5 = roles.splice(2);
// console.log(res5);
// console.log(roles);

// const res6 = roles.splice(2,1);
// console.log(res6);
// console.log(roles);

// const res7 = roles.splice(-1);
// console.log(res7);
// console.log(roles);

// let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
// // удалить 3 первых элемента и заменить их другими
// arr.splice(0, 3, "Давай", "танцевать");
// console.log( arr ) // теперь ["Давай", "танцевать", "прямо", "сейчас"]

//? Разворачивает массив
const res8 = roles.reverse();
console.log(res8);
console.log(roles);

const newRoles = ['sysadmin', 'development'];
const res9 = roles.concat(newRoles);
console.log(res9);


