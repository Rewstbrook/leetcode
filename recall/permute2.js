/**
 * @description leetcode-47全排列
 * 给定一个包含重复数字的数组 nums ，返回其 所有可能的全排列。
 */
// [1, 2, 3]
// [1, 2, 2]
function permute(nums) {
    let result = [];
    nums.sort((a, b) => a - b);
    const back = (path = [], used = []) => {
        if (path.length == nums.length) {
            result.push([...path]);
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) {
                continue;
            }
            if (!used[i]) {
                path.push(nums[i]);
                used[i] = true;
                back(path, used);
                path.pop();
                used[i] = false;
            }
        }
    }
    back([], [])
    return result;
}
console.log(permute([1, 2, 2]));