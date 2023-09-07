//! DRY

const tasks = ['Задача 1'];

function add (task) {
  tasks.push(task);
}


function del (task) {
  const index = tasks.indexOf(task);
  if (index === -1) {
    return
  }
  return tasks.splice(index, 1);
}


function prioritize (task) {
  const result = del(task);
  if (!result) {
    return
  }
  tasks.unshift(result[0]);
}

add ('Задача 2');
add ('Задача 3');
console.log(tasks);
del ('Задача 2');
console.log(tasks);
prioritize ('Задача 3')
console.log(tasks);