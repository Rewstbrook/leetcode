/**
 * @description leetcode-63不同路径,设置了障碍物
 */
function uniquePathsWithObstacles(obstacleGrid) {
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // 不是障碍物
            if (obstacleGrid[i][j] == 0) {
                if (i == 0) {
                    // 只取左边的值
                    obstacleGrid[i][j] = obstacleGrid[i][j - 1] ?? 1;
                } else if (j == 0) {
                    // 只取上边的值
                    obstacleGrid[i][j] = obstacleGrid[i - 1][j] ?? 1;
                } else {
                    obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1];
                }
            } else {
                obstacleGrid[i][j] = 0;
            }
        }
    }
    console.log(obstacleGrid);
    return obstacleGrid[m - 1][n - 1];
}
uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]])