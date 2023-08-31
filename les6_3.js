console.log ('Вася' || 'Олег'); //? Выводит первый TRU
console.log (false || 'Олег');
console.log ('Вася'|| false);
console.log (false || false);

console.log ('Вася' && 'Олег'); //? Выводит первый FALSE или последний TRU
console.log (false && 'Олег'); 
console.log ('Вася' && false);
console.log (false && false);


let a;
const userName = a || 'Петя'; 
console.log (userName)

let b = 'Марина';
const userName2 = b || 'Петя';
console.log (userName2)

const isAdmin = true
const fileName = isAdmin && 'file.mp4'
console.log (fileName)