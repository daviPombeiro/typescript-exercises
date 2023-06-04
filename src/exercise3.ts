/**
 * 1 - Create a function called toNumber
 * 2 - the function can recieve number | string
 * 3 - if the function recieves a number, returns a number
 * 4 - if the function recieves a string, returns a number
 * 5 - if the function recieves something diferent, return an error
 */

function toNumber(value: number | string) {
    if (typeof value === "number") {
        return value;
    } else if (typeof value === "string") {
        return Number(value);
    } else {
        throw new Error("value must be string or number");
    }
}


console.log("exercise 3:", toNumber(12));
console.log("exercise 3:", toNumber("12"));