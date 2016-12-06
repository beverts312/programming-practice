// What is the largest prime factor of the number 600851475143 ?

/**
 * Checks to see if input is a prime number
 * @param {number} x
 * @returns {boolean}
 */
const isPrime = (x: number): boolean => {
    for (let i = 2; i < x; i++) {
        if (x % i == 0) {
            return false;
        }
    }
    return x > 1;
}

/**
 * Checks to see if the input is a factor of the num global variable
 * @param {number} x
 * @returns {boolean}
 */
const isFactor = (x: number): boolean => {
    return num % x ? false : true;
}

const num = 600851475143;
const max = Math.floor(Math.sqrt(num));

for (let i = max; i > 2; i--) {
    if (isFactor(i)) {
        if (isPrime(i)) {
            console.log(i);
            break;
        }
    }
}