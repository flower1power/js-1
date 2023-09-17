//! forEach итерирование по массиву

const score = [5, 10, 0, 15];

// for (const [i, el] of score.entries()) {
//   console.log(`Раунд ${i + 1}: ${el}`);
// }

// const iterator = (el) => {console.log(`Раунд : ${el}`)};
// score.forEach(iterator);

score.forEach((croreEl, i, arr) => {
  console.log(`Раунд ${i + 1}: ${croreEl}, ${arr}`);
});
//(5, 0) => {...}
//(10, 1) => {...}
//(0, 2) => {...}
//(15, 3) => {...}



