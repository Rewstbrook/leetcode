/**
 * @description 最长连续序列
 */
function longestConsecutive(nums) {
    nums.sort((a, b) => a - b);
    let count = 1;
    let max = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            continue;
        }
        if (nums[i] + 1 == nums[i + 1]) {
            count++;
            max = Math.max(max, count);
        } else {
            count = 1;
        }
    }
}
