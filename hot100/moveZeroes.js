function moveZeroes(nums) {
    let k = 0;
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
console.log(moveZeroes([2]))