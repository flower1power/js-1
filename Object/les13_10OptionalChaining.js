const cities = {
  msk: {
    temp: {
      celcius: 25,
    },
    let: 25,
  },
  spb: {},
};

//? Старый вариант обращения раньше

const city = 'spb';
if (cities[city] !== undefined && cities[city].temp !== undefined) {
  console.log(cities[city].temp.celcius);
}

//? Новый вариант обращения раньше
// Если нет то получим undefined
console.log(cities[city]?.temp?.celcius);

// console.log(cities.msk.temp.celcius);
// console.log(cities.spb.temp.celcius);
