/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    const hLength = haystack.length;
    const nLength = needle.length;

    let hIndex = 0
    while (hIndex < hLength) {
        let j = hIndex
        let nIndex = 0;

        while (j < hLength && nIndex < nLength && haystack[j] === needle[nIndex]) {
            j++;
            nIndex++;
        }

        if (nIndex === nLength) {
            return hIndex
        }

        hIndex++
    }
    return -1;
};