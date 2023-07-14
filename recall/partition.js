/**
 * @description leetcode-131 给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 回文串 。返回 s 所有可能的分割方案。
 */
/**
 * 回溯三部曲
 * 递归函数参数
 * 递归终止条件
 * 单层搜索逻辑
 */
function partition(s) {
    let result = [];
    let path = [];
    const dfs = (start) => {
        if (start >= s.length) {
            result.push([...path]);
            console.log(path)
            return;
        }
        for (let i = start; i < s.length; i++) {
            if (!isPalindrome(s, start, i)) {
                continue;
            }
            path.push(s.substring(start, i + 1));
            dfs(i + 1);
            path.pop();
        }
    }
    dfs(0);
    return result;
}
function isPalindrome(s, start, i) {
    while (start <= i) {
        if (s[start] != s[i]) {
            return false;
        }
        start++;
        i--;
    }
    return true;
}
console.log(partition("aab"))