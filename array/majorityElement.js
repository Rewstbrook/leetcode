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
 * @description 给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/k ⌋ 的元素。
 */
// 先找票数多的，再看票数能不能满足条件
function majorityElementAdvance(nums, k) {
    let len = nums.length;
    let a = 0;
    let b = 0;
    let c1 = 0;
    let c2 = 0;
    for (let item of nums) {
        if (c1 != 0 && a == item) {
            c1++;
        } else if (c2 != 0 && b == item) {
            c2++;
        } else if (c1 == 0 && ++c1 >= 0) {
            a = item;
        } else if (c2 == 0 && ++c2 >= 0) {
            b = item;
        } else {
            c1--;
            c2--;
        }
    }
    console.log("a:", a);
    console.log("b:", b);
    console.log("c1:", c1);
    console.log("c2:", c2);
    c1 = 0;
    c2 = 0;
    for (let item of nums) {
        if (a == item) {
            c1++;
        } else if (b == item) {
            c2++;
        }
    }
    let res = []
    if (c1 > len / 3) {
        res.push(a);
    }
    if (c2 > len / 3) {
        res.push(b);
    }
    return res;
}
console.log(majorityElementAdvance([1, 2, 3, 4, 4, 4]))
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