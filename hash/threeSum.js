/**
 * @description leetcode-15三数之和
 * @param {*} nums 
 */
function threeSum(nums) {
    const result = [];
    const len = nums.length;
    nums.sort((a, b) => a - b);
    for (let i = 0; i < len; i++) {
        let left = i + 1;
        let right = len - 1;
        let num = nums[i];
        if (num > 0) {
            return result;
        }
        if (num == nums[i - 1]) {continue}
        while (left < right) {
            let leftNum = nums[left];
            let rightNum = nums[right];
            let threeSumNum = leftNum + rightNum + num;
            // 三数之和小于0，左指针右移
            if (threeSumNum < 0) {
                left++;
            } else if (threeSumNum > 0) {
                right--;
            } else {
                result.push([num, leftNum, rightNum]);
                // 去重
                while (left < right && nums[left] == nums[left + 1]) {
                    left++;
                }
                while (left < right && nums[right] == nums[right - 1]) {
                    right--;
                }
                left++;
                right--;
            }
        }
    }
    return result;
}

console.log(threeSum([-1,0,1,2,-1,-4]));