/**
 * Create a function that rounds up a given value.
 * The value can be a string or a number
 * and the function should return the result with the same type.
 */

function roundValue(value: string): string;
function roundValue(value: number): number;
function roundValue(value: string | number): string | number {
    if (typeof value === 'number') {
        return Math.ceil(value);
    } else {
        return Math.ceil(Number(value)).toString();
    }
}

console.log("exercise 9:", roundValue(2.6));
console.log("exercise 9:", roundValue("2.6"));