/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) {
        return false;
    }

    let result = 0;
    let newNum = x;

    while (newNum > 0) {
        result = (result * 10) + (newNum % 10)
        newNum = Math.floor(newNum / 10)
    }

    return result === x;
};