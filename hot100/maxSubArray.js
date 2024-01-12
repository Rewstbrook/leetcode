function maxSubArray(nums) {
    let max = nums[0];
    let sum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        sum = Math.max(nums[i], nums[i] + sum);
        max = Math.max(max, sum);
    }
    return max;
}
function maxSubArrayDp(nums) {
    let max = 0;
    let dp = new Array(nums.length).fill(0);
    dp[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(nums[i], nums[i] + dp[i - 1]);
    }
    for (let i = 0; i < dp.length; i++) {
        max = Math.max(max, dp[i]);
    }
    return max;
}
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));