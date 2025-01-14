/**
 * @method productExceptSelf
 * @description leetcode238. 除自身以外数组的乘积
        给你一个整数数组 nums，返回 数组 answer ，其中 answer[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积 。
    题目数据 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内。
    请 不要使用除法，且在 O(n) 时间复杂度内完成此题。
    示例 1:
    输入: nums = [1,2,3,4]
    输出: [24,12,8,6]

    示例 2:
    输入: nums = [-1,1,0,-3,3]
    输出: [0,0,9,0,0]
 */
function productExceptSelf(nums) {
    let len = nums.length;
    let ans = new Array(len).fill(1);
    let prefix = 1;
    let suffix = 1;
    for (let i = 0; i < len; i++) {
        ans[i] *= prefix;
        prefix *= nums[i];
        ans[len - i - 1] *= suffix;
        suffix *= nums[len - i - 1];
    }
    return ans;
}
function productExceptSelf1(nums) {
    let len = nums.length;
    if (len <= 1) return [];
    let ans = new Array(len).fill(1);
    let prefix = 1;
    let suffix = 1;
    for (let i = 0; i < len; i++) {
        // 永远等于上一次的prefix * nums[i]
        ans[i] *= prefix;
        prefix *= nums[i];
    }
    for (let i = len - 1; i >= 0; i--) {
        ans[i] *= suffix;
        suffix *= nums[i];
    }
    return ans;
}
console.log(productExceptSelf1([2, 4, 6, 8])); // [192,96,64,48]