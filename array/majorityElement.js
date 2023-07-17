/**
 * @description leetcode-169多数元素
 * 给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
 */
function majorityElement1(nums) {
    let numMap = new Map();
    for (let item of nums) {
        if (numMap.get(item)) {
            numMap.set(item, numMap.get(item) + 1);
        } else {
            numMap.set(item, 1);
        }
    }
    for (let item of numMap.keys()) {
        if (numMap.get(item) > (nums.length / 2)) {
            return item;
        }
    }
}
function majorityElement(nums) {
    let winner = nums[0];
    let count = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] == winner) {
            count++;
        } else if (count == 0) {
            winner = nums[i];
            count++;
        } else {
            count--;
        }
    }
    return winner;
}
/**
 * @description leetcode-1150
 */
function isMajorityElement(nums, target) {
    let count = 0;
    for (let item of nums) {
        if (item == target) {
            count++;
        }
    }
    return count > (nums.length / 2);
}
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]))
console.log(isMajorityElement([438885258,438885258], 438885258))