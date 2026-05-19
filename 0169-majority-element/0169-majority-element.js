/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    // [2,2,1,1,1,2,2]
    let candidate = nums[0];
    let count = 1;

    for (let i = 1; i < nums.length; i++) {
        const num = nums[i];

        if (count === 0) {
            candidate = num;
            count = 1;
        }
        else if (num === candidate) {
            count++;
        }
        else {
            count--;
        }
    }

    return candidate;
};