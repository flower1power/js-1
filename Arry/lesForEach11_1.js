//! forEach итерирование по массиву

const score = [5, 10, 0, 15];

// for (const [i, el] of score.entries()) {
//   console.log(`Раунд ${i + 1}: ${el}`);
// }

// const iterator = (el) => {console.log(`Раунд : ${el}`)};
// score.forEach(iterator);

score.forEach((scoreEl, i, arr) => {
  console.log(`Раунд ${i + 1}: ${scoreEl}, ${arr}`);
});
//(5, 0) => {...}
//(10, 1) => {...}
//(0, 2) => {...}
//(15, 3) => {...}
