/**
 * @description leetcode-494 目标和
 * 
 */
function findTargetSumWays(nums, target) {
    let count = 0;
    const back = (index, sum) => {
        if (index == nums.length) {
            if (sum == target) {
                count++;
            }
        } else {
            back(index + 1, sum + nums[index]);
            back(index + 1, sum - nums[index]);
        }
    }
    back(0, 0);
    return count;
}
console.log(findTargetSumWays([1,1,1,1,1], 3));