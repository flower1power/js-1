/*
Ваша часовая ставка 80$ и вы готовы работать не более 5 часов в день 5 дней в неделю (кроме выходных).
К вам приходит заказчик и предлагает заказ на 40 часов работы. Сейчас понедельник. Вы должны уехать через 11 дней.
Выведете в консоль:
Boolean переменную успеете ли вы взяться за работу
Сколько вы за неё попросите?
*/

//!мое
const priseUSD = 80;
const timeJob = 5;
const vich = 2;
const day = 5;
const job = 40;
const out = 11;

const dayjob = job / timeJob;
console.log(dayjob);
const srok = out - (dayjob + vich);
console.log (srok);
console.log(srok > out);
console.log((dayjob * timeJob) * priseUSD);

// ? как надо

const payRateUSD = 80;
const projectHours = 40;
const availableHours = (11 - 2) * 5;
console.log('смогу ли я работать? ' + (availableHours > projectHours));
console.log('стоимость работ: ' + projectHours * payRateUSD + '$');