/**
 * @description leetcode-17电话号码
 */
function letterCombinations(digits) {
    let result = [];
    let numsMap = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    let len = digits.length;
    const dfs = (digit, len, index, strArr = []) => {
        if (strArr.length == len) {
            result.push(strArr.join(""));
            return;
        }
        for (let item of numsMap[~~digit[index]]) {
            strArr.push(item);
            dfs(digit, len, index + 1, strArr);
            strArr.pop()
        }
    }
    dfs(digits, len, 0, [])
    return result;
}
console.log(letterCombinations("23"));