/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const result = [];
    const add = (str, open, close) => {
        if (str.length === 2 * n) {
            result.push(str)
            return;
        }
        if (open < n) {
            add(str + '(', open + 1, close)
        }
        if (close < open) {
            add(str + ")", open, close + 1)
        }
    }
    add('', 0, 0)
    return result
};


