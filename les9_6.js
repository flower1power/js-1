//! for of и for in

const arr = [1, 4, 8, 7, 'xxx'];


for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//? Используется для перебора массива по элементам
for (let element of arr) {
  console.log(element);
}
//? если нужно работать с индексом массива
for (let index in arr){
  console.log(arr[index]);
}

for (let index in arr){
  console.log(index);
}