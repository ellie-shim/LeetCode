/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    const newStr = s.replaceAll(/[^a-zA-Z0-9]/g, "").toLowerCase()

    if (newStr.length < 2) {
        return true;
    }

    let start = 0, end = newStr.length - 1

    while (start <= end) {
        if (newStr[start] !== newStr[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true
};