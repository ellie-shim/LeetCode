/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    strs.sort();

    let index = 0;
    const first = strs[0]
    const last = strs[strs.length - 1]

    while (index < first.length && index < last.length && first[index] === last[index]) {
        index++

    }

    return strs[0].substring(0, index)
};