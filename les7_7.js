//! Функции в функциях


//? плохой вариант

const KG_IN_USD = 7;
const KM_IN_USD = 5;

function getExchangePrice(present1, present2, distance) {
  const prise1 = present1 * KG_IN_USD;
  const prise2 = present2 * KG_IN_USD;
  const distancePrice = distance * KM_IN_USD;
  return prise1 + prise2 + distancePrice
}

console.log (getExchangePrice(1, 2, 10));


//? Правильный вариант

const KG_IN_USD2 = 7;
const KM_IN_USD2 = 5;


function calculateW(present) {
  return present * KG_IN_USD2;
}

function calculateKm(distance) {
  return distance * KM_IN_USD2;
}
function getExchangePrice2(present1, present2, distance) {
  const prise1 = calculateW(present1);
  const prise2 = calculateW(present2);
  const distancePrice = calculateKm(distance);
  return prise1 + prise2 + distancePrice
}

console.log (getExchangePrice2(1, 2, 10));