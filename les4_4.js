//! Порядок операторов
const isSuited = 100 - 10 > 90 - 5;
console.log(isSuited);
//? Ссылка https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table

// 100 - (12) 10 > (10) 90 - (12) 5;

const a = (6 + 10) / 2;
console.log(a);

let b;
let c;
c = b = 100 + 50 + 30; //? Работает справа на лево
console.log(c);
console.log(b);
