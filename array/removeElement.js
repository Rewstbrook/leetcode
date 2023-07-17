/**
 * leetcode-27移除元素
 * 双指针
 */
function removeElement(nums, target) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != target) {
            nums[count] = nums[i];
            count++;
        }
    }
    return count;
}
// console.log(removeElement([3,2,2,3], 2));
/**
 * leetcode-26删除重复元素
 * 双指针法
 * 定义两个指针，lowPoint和fastPoint，lowPoint初始为0，fastPoint初始为1，
 * 两指针所指元素相同时，将fast向右移动，直到所指元素不同（此时low和fast之间
 * 会拉开一个区间，该区间内的元素就是需要删除的元素），此时将low向右移动一位，
 * 并将其赋值为fast所指的元素（此时0到low指针所在区间的元素就是不重复的元素），
 * 当fast指针超出数组范围则终止循环，此时low位置+1就是去重之后的数组长度
 */
function removeDuplicates(nums) {
    if (nums.length <= 1) {
        return nums.length;
    }
    let lowPoint = 0;
    let fastPoint = 1;
    // 当快指针超出数组长度，终止循环
    while (fastPoint < nums.length) {
        if (nums[lowPoint] != nums[fastPoint]) {
            lowPoint++;
            nums[lowPoint] = nums[fastPoint];
        }
        fastPoint++;
    }
    return lowPoint+1;
}
console.log(removeDuplicates([1,2,2,2,2,3,4]));
/**
 * leetcode-283移动零
 */
function moveZeroes1(nums) {
    let zeroNum = 0;
    console.log(nums);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            nums[zeroNum++] = nums[i];
            // zeroNum++;
        }
    }
    for (let i = zeroNum; i < nums.length; i++) {
        nums[i] = 0;
    }
    console.log(nums);
}
function moveZeroes2(nums) {
    let left = 0;
    let right = 0;
    while (right < nums.length) {
        console.log(nums);
        if (nums[right] != 0) {
            let tmp = nums[left];
            nums[left] = nums[right];
            nums[right] = tmp;
            left++;
        }
        right++;
    }
    return nums;
}
function moveZeroes3(nums) {
    let k = 0; // 这个只是记录位置
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            k++;
        } else {
            if (k > 0) {
                nums[i - k] = nums[i];
                nums[i] = 0;
            }
        }
    }
    return nums;
}
// moveZeroes3([0,1,0,3,4]);
console.log(moveZeroes3([0,1,0,3,2]));


/**
 * @description 给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使得出现次数超过k次的元素只出现k次 ，返回删除后数组的新长度。
                不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
 */
function removeDuplicatesAdvance(nums, k) {
    let count = 0;
    for (let item of nums) {
        // count < k是为了优先取出来前k个元素
        // nums[count - k]是取出来当前位置前面第k个元素
        if (count < k || nums[count - k] != item) {
            nums[count] = item;
            count++;
        }
    }
    return count;
}
console.log(removeDuplicatesAdvance([1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4], 3))