// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.  

/**
 * Calculates the fibbonaci value
 * @param {number} x
 * @returns {number}
 */
const fibonacci = (x: number): number => {
    if (x <= 1) {
        return 1;
    }
    return fibonacci(x - 1) + fibonacci(x - 2);
};

/**
 * Checks to see if the input is even
 * @param {number} x
 * @returns {boolean}
 */
const isEven = (x: number): boolean => {
    return x % 2 ? false : true;
};

const max = 4000000;
let answer = 0;
let n = 0;
let i = 2;

while (n < max) {
    if (isEven(n) === true) {
        answer += n;
    }
    n = fibonacci(i);
    i++;
}
console.log(answer);
// 4613732