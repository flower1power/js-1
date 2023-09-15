//! While

// for (let i = 1; i < 5; i++) {
//   console.log(`Вывод - ${i}`);
// }

// //? выполняется до тех пор пока
// let i = 1;
// while (i < 5) {
//   console.log(`Вывод - ${i}`);
//   i++;
// }

const arr = [1, 4, 8, 7];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 5) {
    break;
  }
  console.log(arr[i]);
}

let i = 0;
while (arr[i] <= 5 && i < arr.length) {
  console.log(arr[i]);
  i++;
}

//? сначала выполнится do потом while и так по кругу
let j = 0;
do {
  console.log(j);
  j++;
  console.log(j);
} while (j < 0);
