/**
 * @description leetcode-1480一维数组动态和
 */
function runningSum(nums) {
    let result = new Array(nums.length).fill(null);
    result[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
        result[i] = result[i - 1] + nums[i];
    }
    return result;
}