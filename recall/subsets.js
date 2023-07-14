/**
 * @description leetcode-78子集
 * 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。
 */
function subsets(nums) {
    let result = [];
    const back = (start, path = []) => {
        result.push([...path]);
        for (let i = start; i < nums.length; i++) {
            let num = nums[i];
            path.push(num);
            back(i + 1, path);
            path.pop();
        }
    }
    back(0, []);
    return result;
}
console.log(subsets([1,2,3]))