/* Замаскировать все, кроме последних 4х символов */
const card = '2342834503458353';
/* ************8353 */

const forAndCard = card.slice(-4).padStart(card.length, '*');
console.log(forAndCard);
