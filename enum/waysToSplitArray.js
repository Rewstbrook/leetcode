function waysToSplitArray(nums) {
    let ans = 0;
    let left = 0;
    let right = nums.reduce((acc, cur) => acc + cur, 0);
    console.log(right);
    for (let i = 0; i < nums.length - 1; i++) {
        left += nums[i];
        right -= nums[i];
        if (left >= right) {
            ans++;
        }
    }
    return ans;
};
let arr1 = [1, 2, 2, 2, 5, 0];
console.log(waysToSplitArray(arr1)); // 3