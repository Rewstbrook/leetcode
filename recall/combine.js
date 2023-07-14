/**
 * @description 给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。
 * @param {*} n 
 * @param {*} k 
 */
// let result = [];        // 存放符合条件结果的集合
// let path = [];          // 存放符合条件的单一结果
// function combine(n, k) {
//     result = [];
//     backtracking(n, k, 1);
//     return result;
// }
// function backtracking(n , k, start) {
//     if (path.length == k) {
//         result.push(path);
//         return;
//     }
//     for (let i = start; i <= n - (k - path.length) + 1; i++) {
//         path.push(i);
//         backtracking(n, k, i + 1);
//         path.pop();
//     }
// }
function combine(n, k) {
    let result = [];
    const backtracking = (n, k, path = [], start) => {
        if (path.length == k) {
            result.push([...path]);
            return;
        }
        for (let i = start; i <= n - (k - path.length) + 1; i++) {
            path.push(i);
            backtracking(n, k, path, i + 1);
            path.pop();
        }
    }
    backtracking(n, k, [], 1);
    return result;
}
console.log(combine(4, 2));