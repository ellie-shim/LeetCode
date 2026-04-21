/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let left = 0;
    let right = 1;

    if (nums[left] + nums[right] === target) return [left, right];

    while (nums[left] + nums[right] !== target) {
        if (right < nums.length - 1) {
            right += 1;
            continue;
        }
        left += 1;
        right = left + 1;
    }

    return [left, right]

};