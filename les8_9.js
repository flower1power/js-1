//! Rest

const data = [1, 2, 3, 4, 5, 6];
const [one, two, ...others] = data; //?REST (остальное)
// REST только в конце
console.log (one, two);
console.log (one, two, others);
