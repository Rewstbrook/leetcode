/**
 * @description 数组交集
 */
function intersection(nums1, nums2) {
    const result = [];
    let numsMap = new Map();
    for (let item of nums1) {
        numsMap.set(item, true);
    }
    for (let item of nums2) {
        if (numsMap.get(item)) {
            numsMap.delete(item);
            result.push(item);
        }
    }
    return result;
}
function intersect(nums1, nums2) {
    const result = [];
    let numsMap = new Map();
    for (let item of nums1) {
        if (numsMap.get(item)) {
            numsMap.set(item, numsMap.get(item) + 1);
        } else {
            numsMap.set(item, 1);
        }
    }
    for (let item of nums2) {
        if (numsMap.get(item)) {
            result.push(item);
            numsMap.set(item, numsMap.get(item) - 1);
        }
    }
    return result;
}
console.log(intersect([1,2,2,1], [2,2]))