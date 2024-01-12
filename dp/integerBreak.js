/**
 * @description lc-343整数拆分
 * 给定一个正整数 n ，将其拆分为 k 个 正整数 的和（ k >= 2 ），并使这些整数的乘积最大化。
 */
/**
 * 动态规划五部曲
 * 1、确定dp数组及含义
 *      dp[n] 拆分数字n，可以得到最大乘积dp[n]
 * 2、确定递推公式
 *      (1)、将拆分成两个数(j, n-j) dp[n] = j * (n-j)
 *      (2)、拆分成大于两个数，此时j不再拆分，继续拆分n-j，dp[n] = j * dp[n-j]
 *      (3)、由于结果要乘积最大化，所以dp[n] = Math.max(j * (n-j), j * dp[n-j])
 * 3、dp数组如何初始化
 *      如果n=0，dp[0] = 0;因为0没办法拆分，不满足题意
 *      如果n=1，dp[1] = 0;因为1也没办法拆分，不满足题意
 *      如果n=2, dp[2] = 1;因为2只能拆成1和1
 *      如果n=3，此时dp[3]就有比较的需要了，因为3有多种拆分方式(1,2)(1,1,1)
 * 4、确定遍历顺序
 *      从左到右遍历即可
 * 5、举例推导dp数组
 */
function integerBreak(n) {
    if (n <= 1) {
        return 0;
    }
    let dp = new Array(n + 1).fill(0);
    dp[2] = 1;
    for (let i = 3; i <= n; i++) {
        for (let j = 0; j <= (i - j); j++) {
            dp[i] = Math.max(dp[i], Math.max(j * (i - j), j * dp[i - j]));
        }
    }
    return dp[n];
}
console.log(integerBreak(10));
console.log(integerBreak(3));