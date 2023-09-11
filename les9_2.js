//! Break and continue

const tasks = ['Задача 1', 'Задача 2', 'Задача 3'];

// console.log(tasks[0]);

//Установили условие длиной массива
for(let i = 0; i < tasks.length; i++) {
  if (tasks[i] === 'Задача 2'){
    continue; //* пропускает элемент из условия
  }
  console.log(tasks[i]); 
}
console.log('------'); 
for(let i = 0; i < tasks.length; i++) {
  if (tasks[i] === 'Задача 2'){
    break; //* останавливается когда доходит до условия
  }
  console.log(tasks[i]); 
}

