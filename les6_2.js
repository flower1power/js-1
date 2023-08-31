const isAdmin = true;
const canWrite = true;

console.log(`Cистемный файл ${isAdmin && canWrite}`);
console.log(`Обычный файл ${isAdmin || canWrite}`);
console.log(`Инвертируем права админа ${!isAdmin}`);


//? && - Логическое И
//? || - Логическое ИЛИ
//? ! - Логическое НЕ

const isEdited = true;
const isSuperAdmin = true;

console.log(`Cистемный файл с редактированием ${
    isAdmin && canWrite && !isEdited
}`);

console.log(`Cистемный файл с редактированием ${
  isAdmin && canWrite && (!isEdited || isSuperAdmin)
}`);

let a = 7;
if (a === -8 || a === 22){


}
