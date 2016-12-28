// Find the largest palindrome made from the product of two 3-digit numbers.

/**
 * Checks if the input is a palindrome
 * @param {number} x
 * @returns {boolean}
 */
const isPalindrome = (x: number): boolean => {
    const xStr = x.toString();
    const length = xStr.length;
    for (let i = 0; i < length; i++) {
        if (xStr.charAt(i) !== xStr.charAt((length - 1) - i)) {
            return false;
        }
    }
    return true;
};

let t = 0;
let possible = [];
for (let i = 999; i > 100; i--) {
    for (let j = 999; j > 100; j--) {
        t = i * j;
        if (isPalindrome(t)) {
            possible.push(t);
        }
    }
}
possible.sort((a, b) => { return b - a; });
console.log(possible[0]);
// 906609