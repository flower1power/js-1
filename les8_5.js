//! Из строки в массив и обратно

const roles = ['user', 'admin', 'manager', 'superuser'];

const url = '/auth/user/login';
const res = url.split('/');
console.log(res);

console.log(roles.join('-'));

let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
// удалить 3 первых элемента и заменить их другими
arr.splice(0,1, "Давай", "танцевать");
console.log( arr ) // теперь ["Давай", "танцевать", "прямо", "сейчас"]
