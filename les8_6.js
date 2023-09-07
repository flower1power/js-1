/*
Сделать функции:
Добавление задачи в конец
Удаление задачи по названию
Перенос задачи в начало списка по названию
! Всегда меняем исходный массив
*/

const tasks = ['Задача 1'];

function add (task) {
  tasks.push(task);
  console.log(tasks);
}


function del (task) {
  const index = tasks.indexOf(task);
  if (index === -1) {
    return
  }
  tasks.splice(index, 1);
  console.log(tasks);
}


function prioritize (task) {
  const index = tasks.indexOf(task);
  if (index === -1) {
    return
  }
  const oldTask = tasks[index];
  tasks.splice(index, 1);
  tasks.unshift(oldTask);
  console.log(tasks)
}

add ('Задача 2');
add ('Задача 3');
del ('Задача 4');
prioritize ('Задача 3')



