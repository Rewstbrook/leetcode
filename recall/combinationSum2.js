/**
 * @description leetcode-40组合总和
 */
function combinationSum2(candidates, target) {
    let result = [];
    let len = candidates.length;
    candidates.sort((a, b) => a - b);
    const dfs = (start, nums = [], sum = 0) => {
        if (sum > target) {
            return;
        }
        if (sum == target) {
            result.push([...nums]);
            return;
        }
        for (let i = start; i < len; i++) {
            if (i > start && candidates[i] == candidates[i - 1]) {
                continue;
            }
            sum += candidates[i];
            nums.push(candidates[i]);
            dfs(i + 1, nums, sum);
            sum -= candidates[i];
            nums.pop();
        }
    }
    dfs(0, [], 0);
    return result;
}
console.log(combinationSum2([10,1,2,7,6,1,5], 8))