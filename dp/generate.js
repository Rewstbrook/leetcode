/**
 * @description leetcode-118杨辉三角
 */
function generate(numRows) {
    let dp = new Array(numRows);
    for (let i = 0; i < numRows; i++) {
        let innerArr = [];
        for (let j = 1; j <= i; j++) {
            if (j == 0 || j == i - 1) {
                innerArr.push(1);
            } else {
                innerArr[j] = dp[i - 1][j - 1] + dp[i - 1][j];
            }
        }
        dp.push(innerArr);
    }
    return dp;
}
function getRow(rowIndex) {
    let result = [];
    for (let i = 0; i <= rowIndex; i++) {
        let row = [];
        for (let j = 0; j <= i; j++) {
            if (j == 0 || j == i) {
                row.push(1);
            } else {
                row.push(result[i - 1][j - 1] + result[i - 1][j]);
            }
        }
        result.push(row);
    }
    console.log(result)
    return result[rowIndex]
}
console.log(getRow(3));