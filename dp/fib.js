/**
 * @description leetcode-509 斐波那契数列
 */
/**
 * 动态规划五部曲
 * 确定dp数组以及下标的含义
 * 确定递推公式
 * dp数组如何初始化
 * 确定遍历顺序
 * 举例推导dp数组
 */
function fib(n) {
    let dp = [];
    dp[0] = 0;
    dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}