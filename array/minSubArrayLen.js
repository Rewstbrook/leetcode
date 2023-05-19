/**
 * 给定一个含有 n 个正整数的数组和一个正整数 target 。
找出该数组中满足其和 ≥ target 的长度最小的 连续子数组
[numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。
 */
/**
 * @description 长度最小的字子数组
 */
function minSubArrayLen(nums, target) {
    let result = Infinity;
    let left = 0;
    let sum = 0;
    let subLen = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        while (sum >= target) {
            subLen = i - left + 1;
            result = Math.min(result, subLen);
            sum -= nums[left];
            left++;
        }
        // while (sum >= target) {
        //     subLen = i - left + 1;
        //     result = Math.min(result, subLen);
        //     sum -= nums[left];
        //     left++;
        // }
    }
    return result == Infinity ? 0 : result;
}
console.log(minSubArrayLen([2, 3, 1, 2, 4], 7))
// [2,3,1,2,4,3], 7
// [1,4,4], 4