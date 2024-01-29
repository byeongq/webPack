import number1 from "./a.js";
import number2 from "./b.js";
import number3 from "./c.js";

console.log(number1);
console.log(number2);
console.log(number3);

const buttonA = document.querySelector('#a_number');
const buttonB = document.querySelector('#b_number');
const buttonC = document.querySelector('#c_number');
const display = document.querySelector('#display');

buttonA.addEventListener('click', () => {
    display.textContent = number1;
});

buttonB.addEventListener('click', () => {
    display.textContent = number2;
});

buttonC.addEventListener('click', () => {
    display.textContent = number3;
});