/* Fix all the errors in the following code:

const input = document.querySelector('input');

const total = localStorage.getItem('total');
input.value = total;
calcularGanho(input.value);

function calcularGanho(value) {
  const p = document.querySelector('p');
  p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
}

function totalMudou() {
  const value = Number(input.value);
  localStorage.setItem('total', value);
  calcularGanho(value);
}

input.addEventListener('keyup', totalMudou);
*/

const input = document.querySelector('input#input-exercise2');

const total = localStorage.getItem('total');
if(input && total && input instanceof HTMLInputElement) {
    input.value = total;
    calculateGain(Number(input.value));
}

function calculateGain(value: number): void {
  const p = document.querySelector('p#p-exercise2');
  if(p && p instanceof HTMLParagraphElement) {
    p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
  }
}

function totalChanged(): void {
    if(input && input instanceof HTMLInputElement) {
        localStorage.setItem('total', input.value);
        calculateGain(Number(input.value));
    }
}

if (input) {
    input.addEventListener('keyup', totalChanged);
}