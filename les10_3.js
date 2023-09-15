//! Возвтрат функции

function power(pow) {
  return function (num) {
    return num ** pow;
  };
}

const powerOfTwo = power(2);
console.log(powerOfTwo(5));
console.log(powerOfTwo(10));

const powerOfThree = power(3);
console.log(powerOfThree(5));
console.log(powerOfThree(10));

console.log(power(5)(4));


//!Возврат функции в стрелочной функции
const power2 = pow => num => num ** pow
console.log(power2(5)(4));


