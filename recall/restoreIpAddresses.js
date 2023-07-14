/**
 * @description leetcode-93复原IP地址
 * 给定一个只包含数字的字符串 s ，用以表示一个 IP 地址，
 * 返回所有可能的有效 IP 地址，这些地址可以通过在 s 中插入 '.' 来形成。
 * 你 不能 重新排序或删除 s 中的任何数字。你可以按 任何 顺序返回答案。
 */
/**
 * 回溯三部曲
 * 递归函数参数
 * 递归终止条件
 * 单层搜索逻辑
 */
function restoreIpAddresses(s) {
    let result = [];
    let ipLen = 4;
    let len = s.length;
    if (len < 4 || len > 12) {
        return [];
    }
    const back = (start, path = []) => {
        // 终止递归
        if (path.length == ipLen && start == len) {
            result.push([...path].join("."));
            return;
        }
        for (let i = start; i < start + 3; i++) {
            if (i >= len) {
                break;
            }
            if (isValid(s, start, i)) {
                let str = s.slice(start, i + 1);
                path.push(str);
                back(i + 1, path);
                path.pop();
            }
        }
    }
    back(0, [])
    return result;
}
function isValid(s, start, i) {
    let len = i - start + 1;
    // return 
    if (len > 4) {
        return false;
    }
    if (len > 1 && s.charAt(start) == 0) {
        return false;
    }
    let sum = 0;
    while (start <= i) {
        sum = sum * 10 + ~~s[start];
        start++;
    }
    if (sum > 255) {
        return false;
    }
    return true;
}
var restoreIpAddresses1 = function (s) {
    const res = [], path = [];
    backtracking(0)
    return res;
    function backtracking(start) {
        const len = path.length;
        if (len > 4) return;
        if (len === 4 && start === s.length) {
            res.push(path.join("."));
            return;
        }
        for (let i = start; i < s.length; i++) {
            if (isValid(s, start, i)) {
                const str = s.slice(start, i + 1);
                path.push(str);
                backtracking(i + 1);
                path.pop()
            }
        }
    }
};
console.log(restoreIpAddresses("25525511135"))