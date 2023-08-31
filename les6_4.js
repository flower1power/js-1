//! Оператор нулевого сляния

let userName = 'Вася';
console.log (userName || 'default Username')
console.log (userName ?? 'default Username')
//? Если userName == NULL или UNDEFINDE то 'default Username'
