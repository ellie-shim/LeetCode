/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    if (nums.length === 1) {
        return nums[0]
    }
    let result = 0;
    for (const num of nums) {
        result = result ^ num
    }
    return result
};