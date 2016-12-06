// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.

/**
 * Checks to see if the input is a multiple of 3 or 5
 * @param {number} x
 * @returns {boolean}
 */
const isMultipleOfThreeOrFive = (x: number): boolean => {
    return (x % 3 ? false : true) || (x % 5 ? false : true);
};

let answer = 0;
for (let i = 0; i < 1000; i++) {
    if (isMultipleOfThreeOrFive(i)) {
        answer += i;
    }
}
console.log(answer);
// 233168