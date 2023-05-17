/**
 * @description 有序数组的平方
 */
function sortedSquares(nums) {
    let k = nums.length - 1;
    const result = new Array(k + 1).fill(null);
    console.log(result);
    let i = 0;
    let j = nums.length - 1;
    while (i <= j) {
        if (nums[i] * nums[i] < nums[j] * nums[j]) {
            result[k] = nums[j] * nums[j];
            k--;
            j--;
        } else {
            result[k] = nums[i] * nums[i];
            k--;
            i++;
        }
    }
    return result;
}
console.log(sortedSquares([-6, -2, -1, 0, 4, 5]));