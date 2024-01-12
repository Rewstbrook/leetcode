/**
 * @description leetcode-416分割等和子集
 * 给你一个 只包含正整数 的 非空 数组 nums 。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等
 */
function canPartition(nums) {
    // let sum = nums.reduce((acc, cur) => acc + cur);
    let len = nums.length;
    let sum = 0;
    for (let i = 0; i < len; i++) {
        sum += nums[i];
    }
    // 总和是偶数，否则直接返回false
    if (sum % 2 == 1) {
        return false;
    }
    let target = sum / 2;

    // 创建dp数组，行是物品索引，列是物品容量
    let dp = new Array(len).fill(0).map(() => new Array(target + 1).fill(0));
    // 1
    if (nums[0] <= target) {
        dp[0][nums[0]] = true;
    }
    for (let i = 1; i < len; i++) {
        for (let j = 0; j <= target; j++) {
            dp[i][j] = dp[i - 1][j];
            if (nums[i] == j) {
                dp[i][j] = true;
                continue;
            }
            if (nums[i] < j) {
                dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i]];
            }
        }
    }
    return dp[len - 1][target];
}