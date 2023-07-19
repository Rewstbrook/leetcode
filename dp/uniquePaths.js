/**
 * @description lc-62不同路径
 *  一个机器人位于一个 m x n 网格的左上角 
    机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。
    问总共有多少条不同的路径？
 */
/**
 * 动态规划五部曲
 * 确定dp数组以及下标的含义
 * 确定递推公式
 * dp数组如何初始化
 * 确定遍历顺序
 * 举例推导dp数组
 */
/**
 * 1、确定dp以及下标的含义
 *      dp[i][j] 表示从（0，0）出发，到（i，j）有dp[i][j]种不同的路径
 * 2、确定递推公式
 *      dp[i][j]一定是从dp[i-1][j]和dp[i][j-1]过来，所以dp[i][j] = dp[i-1][j] + dp[i][j-1]
 * 3、dp数组初始化
 *      dp[i][0]是1，因为从(0,0)到(i,0)只有一条路线，只能横着走
 *      dp[0][j]也是1，因为从(0,0)到(0,j)只有一条路线，只能竖着走
 *      for (let i = 0; i < m; i++) dp[i][0] = 1;
 *      for (let j = 0; j < n; j++) dp[0][j] = 1;
 * 4、确定遍历顺序
 *      由于dp[i][j] = dp[i - 1][j] + dp[i][j - 1]，dp[i][j]都是从其上方和左方推导而来，那么从左到右从上到下一层一层遍历就可以了
 */
function uniquePaths(m, n) {
    let dp = new Array(m).fill(1).map(() => new Array(n).fill(1));
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    return dp[m - 1][n - 1];
}
function uniquePaths2(m, n) {
    let dp = new Array(m).fill(1).map(() => new Array(n).fill(1));
    // dp[i][j] 表示到达（i，j） 点的路径数
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    return dp[m - 1][n - 1];

};
// uniquePaths(3, 2);
uniquePaths(3, 7);
uniquePaths2(3, 7);