/**
 * 动归五部曲
 * 1、确定dp数组以及含义
 *      二维数组，dp[i][j]表示从下标为[0-i]的物品里任意取，放进容量为j的背包，价值总和最大是多少
 * 2、确定递推公式
 *      有两个方向可以推导出来dp[i][j]
 *      (1)、不放物品i，此时dp[i][j] = dp[i - 1][j]（意思就是当物品i的重量大于背包j的重量了，物品i就没办法放进背包里
 *           ，所以背包内的价值和前面相同）
 *      (2)、放物品i，有dp[i][j] = dp[i - 1][j - weight[i]] + value[i],
 *          dp[i - 1][j - weight[i]]为背包容量为j - weight[i]的时候不放物品i的最大价值，此时
 *          递推公式为 dp[i][j] = dp[i - 1][j - weight[i]] + value[i]
 * 3、dp数组如何初始化
 *      既然状态转移方程中i是由i - 1推导出来，那么i为0的时候就必须初始化
 *      dp[0][j]就是存放编号0的物品的时候，各个容量的背包所能存放的最大价值。
 *      因此有以下判断
 *          那么很明显当 j < weight[0]的时候，dp[0][j] 应该是 0，因为背包容量比编号0的物品重量还小。
            当j >= weight[0]时，dp[0][j] 应该是value[0]，因为背包容量放足够放编号0物品。
        for (let j = 0; j < weight[0]; j++) {
            dp[0][j] = 0;
        }
        for (let j = weight[0]; j <= bagWeight; j++) {
            dp[0][j] = value[0];
        }

 * 4、确定遍历顺序
 * 5、举例推导dp数组
 */
/**
 * @description 01背包问题
 * 有n件物品和一个最多能背重量为w 的背包。第i件物品的重量是weight[i]，
 * 得到的价值是value[i] 。每件物品只能用一次，求解将哪些物品装入背包里物品价值总和最大。
 * @param {Number} size     背包重量
 * @param {Array}  weight   物品重量list
 * @param {Array}  value    物品价值vlaue
 */
function testWeightBagProblem(weight, value, size) {
    // 定义dp数组
    let dp = new Array(weight.length).fill().map(() => new Array(size + 1).fill(0));
    // 初始化
    for (let j = weight[0]; j <= size; j++) {
        dp[0][j] = value[0];
    }

    for (let i = 1; i < weight.length; i++) {   //遍历物品
        for (let j = 0; j <= size; j++) {
            if (j < weight[i]) {
                dp[j][j] = dp[i - 1][j];
            } else {
                dp[i][j] = Math.max(dp[i - 1][j - weight[i]] + value[i], dp[i - 1][j]);
            }
        }
    }
    console.log(dp);
    return dp[weight.length - 1][size];
}