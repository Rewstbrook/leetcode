function twoSum1(nums, target) {
    let start = 0;
    let len = nums.length;
    let data = new Map();
    for (let i = 0; i < len; i++) {
        data.set(item, i);
    }
    while (start < len) {
        if (data.has((target - nums[start]))) {
            return [start, data.get((target - nums[start]))]
        }
        start++;
    }
}
function twoSum(nums, target) {
    let start = 0;
    let len = nums.length;
    let data = new Map();
    while (start < len) {
        if (data.has(target - nums[start])) {
            return [data.get(target - nums[start]), start];
        }
        data.set(nums[start], start++);
    }
}
function twoSum2(nums, target) {
    let start = 0;
    let len = nums.length;
    let data = new Map();
    console.log(data);
    while (start < len) {
        if (data.has(target - nums[start])) {
            return [data.get(target - nums[start]), start];
        }
        data.set(nums[start], start);
        start++;
    }
}
console.log(twoSum2([2,7,11,15], 9))