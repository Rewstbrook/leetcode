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
    while (start < len) {
        if (data.has(target - nums[start])) {
            return [data.get(target - nums[start]), start];
        }
        data.set(nums[start], start);
        start++;
    }
}



function twoSum4(arr, tartet) {
    if (arr.length < 2) {
        return
    }
    let start = 0;
    let len = arr.length;
    let idxMap = new Map()
    while (start < len) {
        let calcNext = tartet - arr[start]
        if (idxMap.has(calcNext)) {
            return [idxMap.get(calcNext), start]
        }
        idxMap.set(arr[start], start);
        start++;
    }
}
console.log(twoSum4([2,11,7,15], 9))
