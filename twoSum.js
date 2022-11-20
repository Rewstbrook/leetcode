/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let start = 0;
    let map = new Map();
    const data = {};
    while (start < nums.length) {
        if (data[target - nums[start]] != undefined) {
            return [data[target - nums[start]], start];
        }
        data[nums[start]] = start;
        start++;
    }
};
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));