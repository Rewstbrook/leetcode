/**
 * @description leetcode-491 递增子序列
 * 给你一个整数数组 nums ，找出并返回所有该数组中不同的递增子序列，递增子序列中 至少有两个元素 。你可以按 任意顺序 返回答案。
    数组中可能含有重复元素，如出现两个整数相等，也可以视作递增序列的一种特殊情况。
 */
function findSubsequences(nums) {
    let result = [];
    const back = (start, path = []) => {
        if (path.length > 1) {
            result.push([...path]);
        }
        let numMap = new Map();
        for (let i = start; i < nums.length; i++) {
            if (path.length > 0 && nums[i] < path[path.length - 1] || numMap.get(nums[i])) {
                continue;
            }
            let num = nums[i];
            numMap.set(num, true);
            path.push(num);
            back(i + 1, path);
            path.pop();
        }
    }
    back(0, []);
    return result;
}

console.log(findSubsequences([4, 6, 7, 7]))