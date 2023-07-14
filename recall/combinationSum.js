/**
 * @description leetcode-39组合总和
 */
function combinationSum(candidates, target) {
    let result = [];
    let len = candidates.length;
    const dfs = (start, nums = [], sum = 0) => {
        if (sum > target) {
            return;
        }
        if (sum == target) {
            result.push([...nums]);
            return;
        }
        for (let i = start; i < len; i++) {
            sum += candidates[i];
            nums.push(candidates[i]);
            dfs(i, nums, sum);
            sum -= candidates[i];
            nums.pop();
        }
    }
    dfs(0, [], 0);
    return result;
}
console.log(combinationSum([2, 3, 6, 7], 7))