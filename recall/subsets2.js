/**
 * @description leetcode-78子集
 * 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。
 */
function subsets(nums) {
    let result = [];
    nums.sort((a, b) => a - b);
    const back = (start, path = []) => {
        if (path.length != 0) {
            result.push([...path]);
        }
        for (let i = start; i < nums.length; i++) {
            let num = nums[i];
            if (i > start && nums[i] == nums[i - 1]) {
                continue;
            }
            path.push(num);
            back(i + 1, path);
            path.pop();
        }
    }
    back(0, []);
    return result;
}
console.log(subsets([1,2,2]))