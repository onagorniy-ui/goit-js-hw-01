/*
TODO: Вивести привітання
TODO: Є змінні firstName та age.
TODO: Склади шаблонний рядок: "Привіт, мене звати firstName і мені age років."
*/

const firstName = 'Oleg';
const age = 25;

const message = `Привіт, мене звати ${firstName} і мені ${age} років.`;

console.log(message);

const firstName2 = 'Steve';
const age2 = 30;

const message2 = 'Привіт, мене звати ' + firstName2 + ' і мені ' + age2 + ' років.';

console.log(message2);

/*
TODO: Є змінні a та b. Виведи рядок: "Сума a + b = 13"
*/

const a = 15;
const b = 20;

const message3 = `Summ a+b = ${a + b}`;
console.log(message3);

/*
TODO: Створи функцію getEventInfo(event, date, location),
TODO: яка буде повертати рядок з інформацією про подію: "Подія [event] відбудеться [date]  у місті [location]"
*/
function getEventInfo(event, date, location) {
  return `Event ${event} will happen ${date} in ${location}`;
}
console.log(getEventInfo('Hackaton', '15 June', 'Kyiv'));

/*
TODO: Створи функцію formatUser(name, email), яка повертає рядок: "Користувач [Ім'я] має пошту: [email]"
*/
function formatUser(name, email) {
  return `User ${name} has email: ${email}`;
}
console.log(formatUser('Mollie', 'test1@gmail.com'));

/*
TODO: Перетвори рядок на число.
*/
const str = '10';
const num = +str;
console.log(num);

/*
TODO: Є зміна weight, в якій зберігається значення ваги людини.
TODO: Отримай числове значення ваги.
*/

const weight = '85kg';
const nemWeight = Number.parseInt(weight);

console.log(nemWeight);

/*
TODO: Є зміна height, в якій зберігається значення висоти людини.
TODO: Отримай числове значення висоти.
*/

const height = '175.4cm';
const nemHieght = Number.parseFloat(height);

console.log(height);
console.log(nemHieght);

/*
TODO: Створи функцію getCubeVolume(side), яка обчислює обʼєм куба за переданною стороною.
TODO: Обʼєм куба розраховується за формулою V = a^3.
*/

function getCubeVolume(side) {
  const numSide = Number.parseFloat(side);
  return Math.pow(numSide, 3);
}
console.log(getCubeVolume('5cm'));
console.log(getCubeVolume('3.3cm'));

// function getCubeVolume(side) {
//   const numericalSide = Number.parseInt(side);

//   return numericalSide ** 3;
// }

// console.log(getCubeVolume('5cm'));
// console.log(getCubeVolume('3cm'));
