function rotate(nums, k) {
    let len = nums.length - 1;
    while (k > 0) {
        [nums[len], nums[0]] = [nums[0], nums[len]];
        len--;
        k--;
        console.log(nums);
    }
    return nums;
}
rotate(rotate([1,2,3,4,5,6,7], 3))