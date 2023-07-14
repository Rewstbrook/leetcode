/**
 * @description 括号生成
 */
function generateParenthesis(n) {
    let result = [];
    const dfs = (str = "", left, right) => {
        if (left == 0 && right == 0) {
            result.push(str);
            return;
        }
        if (left > 0) {
            dfs(str + "(", left - 1, right);
        }
        if (right > left) {
            dfs(str + ")", left, right - 1);
        }
    }
    dfs("", n, n);
    return result;
}
console.log(generateParenthesis(3))