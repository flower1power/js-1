//! Деструктуризация

const userData = ['Антон', 18, 'Москва'];

function getData() {
  return ['Антон', 18, 'Москва'];
}

// const userName = userData[0];
// const age = userData[1];
// const city = userData[2];

// const userName2 = getData()[0];
// const age2 = getData()[1];
// const city2 = getData()[2];

const [userName, age, city] = getData();
const [userName2, age2] = userData;
const [userName3, _, city3] = getData();


console.log(userName, age, city);
console.log(userName2, age2);
console.log(userName3, city3);

