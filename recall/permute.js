/**
 * @description leetcode-46全排列
 * 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列。
 */
// [1, 2, 3]
function permute(nums) {
    let result = [];
    const back = (path = [], used = []) => {
        if (path.length == nums.length) {
            result.push([...path]);
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (used[i]) {
                continue;
            }
            path.push(nums[i]);
            used[i] = true;
            back(path, used);
            path.pop();
            used[i] = false;
        }
    }
    back([], [])
    return result;
}
console.log(permute([1, 2, 3]))