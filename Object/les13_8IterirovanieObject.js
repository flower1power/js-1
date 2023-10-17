const cities = {
  msk: {
    temp: 25,
    let: 25,
  },
  spb: {
    temp: 20,
    let: 100,
  },
};

// in итерирует объект по ключам
// let sumTemp = 0;
// console.log(Object.keys(cities)); // получаем ключи по объету
// let citiesCount = Object.keys(cities).length;
// for (const key in cities) {
//   sumTemp += cities[key].temp;
// }
//
// console.log(sumTemp / citiesCount);

//? Альтернативный вариант
let sumTemp = 0;
console.log(Object.keys(cities));
let citiesCount = Object.keys(cities).length;
for (const key of Object.keys(cities)) {
  sumTemp += cities[key].temp;
}

console.log(sumTemp / citiesCount);
