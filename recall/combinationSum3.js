/**
 * @description leetcode-216组合总和3
 * 找出所有相加之和为 n 的 k 个数的组合，且满足下列条件：
    只使用数字1到9
    每个数字 最多使用一次 
    返回 所有可能的有效组合的列表 。该列表不能包含相同的组合两次，组合可以以任何顺序返回。
 */
function combinationSum3(k, n) {
    let result = [];
    const dfs = (k, n, path = [], start, sum = 0) => {
        if (path.length == k) {
            if (sum == n) {
                result.push([...path]);
            }
            return;
        }
        for (let i = start; i <= 9 - (k - path.length) + 1; i++) {
            path.push(i);
            sum += i;
            dfs(k, n, path, i + 1, sum);
            sum -= i;
            path.pop();
        }
    }
    dfs(k, n, [], 1, 0);
    return result;
}
console.log(combinationSum3(3, 7));
console.log(combinationSum3(3, 9));